import { MidiEvent } from "midi-file";
import {Dispatch} from "react";
export declare type TrackEvent = {
    tick: number;
    event: MidiEvent;
};
export declare type TrackEvents = {
    timeSignatures: TrackEvent[];
    endOfSong: TrackEvent;
    tempos: TrackEvent[];
    semiQuaver: number;
};
export declare type TrackNotes = {
    [key: number]: string[];
};
export declare type TrackNoteEvents = {
    tick: number;
    notes: TrackNotes[];
};
export declare type TrackSection = {
    notesPerPhrase: number;
    bars: number;
    tick: number;
    timeSignature: string;
};
export declare type TimeSignatureValues = {
    numerator: number;
    denominator: number;
};
export declare type TrackPhrase = {
    noteCount: number;
    startTick: number;
    endTick: number;
    noteIndexes: number[];
};
export declare type LSDJNote = {
    notes: string[];
    command: string;
    triplets: number[];
    tableId?: string;
};
export declare type LSDJPhrase = {
    noteCount: number;
    startTick: number;
    endTick: number;
    notes: LSDJNote[];
    key: string;
};
export declare type LSDJChain = {
    key: string;
    phrases: string[];
};
export declare type LSDJTrack = {
    chains: LSDJChain[];
    phrases: LSDJPhrase[];
    tables: Map<string, number[]>;
};

export interface AppState {
    data: null | LSDJTrack,
    isLoading: boolean
}

export interface AppContext extends AppState {
    setData: Dispatch<null | LSDJTrack>,
    setIsLoading: Dispatch<boolean>
}

export interface LSDJChannels {
    pu1: string
    pu2: []
    wav: []
    noi: []
}
