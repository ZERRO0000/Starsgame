import ReactPlayer from 'react-player';

export default function Video() {
    return (
        <div>
            <ReactPlayer 
                url={'https://youtu.be/gmA6MrX81z4?si=rbrbjiaf3-kNyGDZ'}
                playing={false}
                controls={true}
            />
        </div>
    )
}