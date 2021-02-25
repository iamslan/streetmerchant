'use strict';

import WebSocket = require('ws');
import models = require('./models');
import {Print, logger} from '../logger';
import {storeList, getStores, Store, Link} from '../store/model';
import {filterStoreLink} from '../store/filter';
import { series } from 'async';

var port: number = 3000;
if (process.env.WS_PORT) {
    port = parseInt(process.env.WS_PORT);
}

var WebSocketServer = WebSocket.Server;
let server: WebSocket.Server;
let itemsMap:any = {};

export async function startWebSocketServer() {
    server = new WebSocketServer({ port: port });
    logger.info(`WebSocketServer is running on port ${port}`);

    for (const store of storeList.values()) {
        if (getStores().has(store.name)) {
            for (const link of store.links) {
                if (filterStoreLink(link)) {
                    var productCode = link.series.toString();
                    if (!itemsMap[productCode]) {
                        itemsMap[productCode] = {};
                    }
                    itemsMap[productCode][store.name] = 'unknown';
                }
            }
        }
    }

    server.on('connection', ws => {
        ws.send(JSON.stringify({ resource: 'itemsMap', payload: itemsMap}));
    });
}

export async function wsNotify(store: Store, link: Link, action: string) {
    broadcast(JSON.stringify({ action: action, payload: { series: link.series, store: store.name }}));
}

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});	
};