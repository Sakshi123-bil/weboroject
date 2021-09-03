import React from 'react';
import teacherImg from './teacher.jpg';
import ReactPlayer, {FilePlayer} from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    grow: {
        marginRight: 25,
        marginLeft: 25,
        marginTop: 50,
        marginBottom: 50,
        [theme.breakpoints.up('sm')]: {
            marginRight: 45,
            marginLeft: 45,
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card_video_list: props => ({
        width: '100%',
        backgroundColor: props.color
    }),
    main_video: {
        height: '100%',
    },
    header: {
        fontWeight: 400,
        fontSize: 12,
        [theme.breakpoints.up('sm')]: {
            fontWeight: 500,
            fontSize: 16,
        }
    },
    subheader: {
        fontWeight: 300,
        fontSize: 10,
        [theme.breakpoints.up('sm')]: {
            fontWeight: 400,
            fontSize: 14,
        }
    },
    avatar: {
        backgroundColor: red[500],
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '50.25%', /* Player ratio: 100 / (1280 / 720) */
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
}));

const VideoJs = () => {
    const classes = useStyles();
    const poster = teacherImg;
    const url ="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
    const playerRef = React.useRef();


    function onReady() {
        console.log('ready');
    }

    function onStart() {
        console.log('start');

    }

    function onPlay() {
        console.log('play');
    }

    function onPause() {
        console.log('pause');
    }


    function onError(e) {
        console.log(e);
    }
    return (
        <div>
            <Typography variant="h4" >
            How to Make Your Design Artful And Lyrical
            </Typography>
            <div className={classes.playerWrapper}>
            <ReactPlayer
                ref={playerRef}
                url={url}
                controls={true}
                className={classes.reactPlayer}
                width={"100%"}
                height={"100%"}
                forcePlayer={FilePlayer}
                playing={false}
                onReady={onReady}
                onStart={onStart}
                onPlay={onPlay}
                onPause={onPause}
                onError={error => onError(error)}
                config={{
                    forceHLS: true,
                    file: {
                        hlsOptions: {
                            forceHLS: true,
                            debug: false,
                            xhrSetup: function (xhr, url) {
                                console.log('my_url:'+url);
                            },
                        },
                    },
                }}
            />
        </div>
        </div>

    )
};
export default VideoJs

