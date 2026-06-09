


'''
takes in 2 audio tracks and analyzes the mix compatibility

Will be working the feature list for the mixer
'''

from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/analyze_mix")
async def analyze_mix(track1: UploadFile = File(...), track2: UploadFile = File(...)):
    pass