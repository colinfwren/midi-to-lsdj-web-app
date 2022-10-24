import formidable, {Fields, Files} from 'formidable'
import { readMidiFile, processTrack } from 'midi-to-lsdj'

export const config = {
  api: {
    bodyParser: false
  }
}

type ProcessedFiles = {
  fields: Fields,
  files: Files
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = await new Promise<ProcessedFiles>((resolve, reject) => {
        const form = new formidable.IncomingForm()
        form.parse(req, (error, fields, files) => {
          if (error) return reject(error)
          resolve({ fields, files })
        })
      })
      if (typeof formData.files.file !== 'undefined' && !Array.isArray(formData.files.file)) {
        const midiData = readMidiFile(formData.files.file.filepath)
        const trackData = processTrack(midiData.tracks[0], midiData.header.ticksPerBeat)
        res.status(200).json(trackData)
      }
    } catch (error) {
      console.error('Failed to process file', error)
      res.status(500).json({status: 'fail', message: 'UPLOAD_ERROR'})
    }
  } else {
    res.status(403)
  }
}
