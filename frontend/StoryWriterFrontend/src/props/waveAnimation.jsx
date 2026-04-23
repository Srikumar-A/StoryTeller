import { useEffect,useRef } from "react";

function WaveAnimation(){
    const canvasRef=useRef(null);

    useEffect(()=>{
        const canvas=canvasRef.current;
        const ctx=canvas.getContext('2d');

        let phase=0;
        let noiseAmt=80;
        let animationId;

        function draw(){
            // clear canvas
            ctx.clearRect(0,0, canvas.width, canvas.height);
            //draw wave using math.sin +noise
            ctx.beginPath();

            for (let x=0;x<canvas.width;x++){
                const noise=(Math.random()-0.5)*noiseAmt;
                const y=canvas.height/2+Math.sin((x+phase)*0.2)*20+noise;
                const y_=canvas.height/2+Math.sin((x+phase+0.18)*0.2)*20+noise;

                if (x===0){
                    ctx.moveTo(x,y)
                }else {
                    ctx.lineTo(x,y)
                    ctx.lineTo(x,y_)
                }
            }
            ctx.strokeStyle='rgba(255,255,255,0.5)';
            ctx.lineWidth=1;
            ctx.stroke();


            // reduce noise gradually to create fading effect
            if (noiseAmt>0){
                noiseAmt-=0.3;
            }
             //increment phase
            phase+=0.03;

           

            // requestAnimationFrame(draw)
            animationId=requestAnimationFrame(draw);
        }

        draw();

        return ()=>cancelAnimationFrame(animationId);
    },[])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default WaveAnimation;