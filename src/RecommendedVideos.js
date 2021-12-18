import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className='RecommendedVideos'>
            <h2>Recommended</h2>
            <div className='recommendedVideos__videos'>
                <VideoCard
                    title='Become a Web Developer in 10 minutes | 2019/2020'
                    views='2.3M Views'
                    timestamp='3 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg'
                />
                <VideoCard
                    title='Learn React with me | 2020/2021'
                    views='1.4M Views'
                    timestamp='2 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_960_720.png'
                />
                <VideoCard
                    title='Start your JavaScript Developer carreer now'
                    views='4.1K Views'
                    timestamp='31 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2019/01/30/07/45/web-3963945_960_720.jpg'
                />
                <VideoCard
                    title='How to prepare for the Web Developer interview in 2022'
                    views='1.6M Views'
                    timestamp='13 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg'
                />
                <VideoCard
                    title='Become a Web Developer in 10 minutes | 2019/2020'
                    views='2.3M Views'
                    timestamp='3 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg'
                />
                <VideoCard
                    title='Learn React with me | 2020/2021'
                    views='1.4M Views'
                    timestamp='2 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_960_720.png'
                />
                <VideoCard
                    title='Start your JavaScript Developer carreer now'
                    views='4.1K Views'
                    timestamp='31 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2019/01/30/07/45/web-3963945_960_720.jpg'
                />
                <VideoCard
                    title='How to prepare for the Web Developer interview in 2022'
                    views='1.6M Views'
                    timestamp='13 days ago'
                    channelImage='https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4'
                    channel='Ogic Rogic'
                    image='https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg'
                />
            </div>
        </div>
    )
};

export default RecommendedVideos;
