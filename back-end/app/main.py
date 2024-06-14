from fastapi import FastAPI

app = FastAPI()

class Token():
    access_token: str
    token_type: str
    

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/test")
def read_root():
    return {"Hello": "Test"}
