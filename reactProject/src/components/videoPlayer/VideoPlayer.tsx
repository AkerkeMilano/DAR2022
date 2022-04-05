import React, { useContext } from "react";
import ReactPlayer from "react-player"
import styled from "styled-components";
import { MovieContext } from "../../contexts/MovieContext";

const StyledVideoWrapper = styled.div`
    padding: 1rem;
    `;

type Props = {
}
const VideoPlayer: React.FC<Props> = () => {
    const { movie, changeMovie } = useContext(MovieContext);
    const closeHandler = () => {
        changeMovie(null);
    }
    return movie ? ( 
    <StyledVideoWrapper>
        <button onClick={closeHandler}>Close</button>
        <ReactPlayer url={movie.trailer}></ReactPlayer>
    </StyledVideoWrapper>
    ) : null;
};

export default VideoPlayer;