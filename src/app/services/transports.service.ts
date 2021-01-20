import { Injectable } from '@angular/core';
import {Transport} from "../models/Transport.model";

@Injectable({
  providedIn: 'root'
})
export class TransportsService {
  transports : Array<Transport>;
  constructor() { }

  getTransportsTypes(): Array<string>{
    return new Array<string>("TAXI","TRAM","BUS","COVOITURAGE");
  }
}
