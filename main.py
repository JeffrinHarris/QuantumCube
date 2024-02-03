from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

# Mount the "Scripts" directory to serve static files
app.mount("/Scripts", StaticFiles(directory="Scripts"), name="Scripts")

@app.get("/")
async def read_index():
    return FileResponse('index.html')

# return json
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}