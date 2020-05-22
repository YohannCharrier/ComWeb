import asyncio
import websockets

async def clientHandler(websocket,path):
    clients.add(websocket)
    while True :
        receivedMessage = await websocket.recv()
        for clt in clients :
            await clt.send(receivedMessage)
        


clients = set()
server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(server)
asyncio.get_event_loop().run_forever()