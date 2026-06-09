import librosa


class AnalysisPipeline:
    def __init__(self,track1,track2=None):
        self.track1=track1
        self.track2=track2

    def run_dsp(self):
        fingerprint=self.get_spectral_timbral_fingerprint(self.track1)


        return {"fingerprint":fingerprint}
    
    def run_ml(self):
        pass

    def get_tempo(self)->float:
        pass

    def get_key(self):
        pass


    # feature 4 - timbral and spectral fingerprinting

    def get_spectral_timbral_fingerprint(self,track):
        #mel spectrogram image
        mel_spectrogram=librosa.feature.melspectrogram(y=track,sr=22050)
        
        # spectral centroid
        spec_centroid=librosa.feature.spectral_centroid(y=track,sr=22050)
        # bandwidth - std deviation
        bandwidth=librosa.feature.spectral_bandwidth(y=track,sr=22050)
        #rolloff
        roll_off=librosa.feature.spectral_rolloff(y=track,sr=22050)
        #MFCC
        mfcc=librosa.feature.mfcc(y=track,sr=22050)

        return {'mel_spectrogram':mel_spectrogram,
                'spectral_centroid':spec_centroid,
                'bandwidth':bandwidth,
                'rolloff':roll_off,
                'mfcc':mfcc}
        