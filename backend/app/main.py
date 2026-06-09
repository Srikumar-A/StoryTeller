from fastapi import FastAPI
from .api.v1 import music_analyzer, mixer_comp
import uvicorn
app=FastAPI()






app.include_router(music_analyzer.router,prefix="/analyze")
app.include_router(mixer_comp.router,prefix="/mix")

if __name__=="__main__":
    uvicorn.run(app,host="127.0.0.1",port=8000)
    