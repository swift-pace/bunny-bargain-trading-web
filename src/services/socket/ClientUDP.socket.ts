import { Injectable } from "../container"

@Injectable()
export class SocketService {
    private _port: number
    private _hostname: string

    constructor(config: { hostname: string; port: number }) {
        this._port = config.port
        this._hostname = config.hostname
    }

    /**
     * connectUDPServer
     */
    public async connectSocketServerUDP() {
        return await Bun.udpSocket({
            connect: {
                port: this._port,
                hostname: this._hostname,
            },
        })
    }
}
