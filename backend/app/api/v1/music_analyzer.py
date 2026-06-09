



# post endpoint recieves a single audio track
'''
focuses on analyzing the audio track and returns different features of the audio track

to return

1. tempo & Beat grid
2. Key & Scale detection
3. genre classification
4. Energy & Mood profile
5. Spectral & Timbre fingerprint
6. Harmonic & melodic analysis
'''
from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/analyze_track")
async def analyze_track(track: UploadFile = File(...)):
    pass