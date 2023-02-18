import {Dispatch} from "react";

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

export type LSDJTableStep = {
  vol: string,
  transpose: string,
  command1: string,
  command2: string
}

export type LSDJTable = {
  key: string,
  steps: LSDJTableStep[]
}

export declare type LSDJTrack = {
    chains: LSDJChain[];
    phrases: LSDJPhrase[];
    tables: LSDJTable[];
};

export declare type LSDJProject = {
    tempo: number
}

export declare type LSDJFile = {
    track: LSDJTrack,
    project: LSDJProject,
}

export interface AppState {
    data: null | LSDJTrack,
    isLoading: boolean
}

export interface AppContext extends AppState {
    setData: Dispatch<null | LSDJFile>,
    setIsLoading: Dispatch<boolean>
}

export interface LSDJChannels {
    pu1: string
    pu2: string[]
    wav: string[]
    noi: string[]
}
