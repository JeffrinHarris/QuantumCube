from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/scripts/{script_name}")
def read_script(script_name: str):
    return FileResponse(f"scripts/{script_name}")

@app.get("/")
def read_index():
    return FileResponse("index.html")