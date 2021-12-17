import React from 'react';
import  ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import './SearchPage.css';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image='https://cdn.pixabay.com/photo/2017/08/12/17/48/red-hair-2634861_960_720.png'
                channel='Tanjica Bananica'
                verified
                subs='659K'
                noOfVideos={382}
                description='You can find some awesome makeup tutorials here! Also, expect design tips and tricks that will take your skills to the next level.'
            />
            <hr/>
            <VideoRow
                views='1.3M Views'
                subs='345K'
                description='Do you want a FREE one hour training...'
                timestamp='50 seconds ago'
                channel='Tanjica Bananica'
                title='Learn make-up tricks with me'
                image='https://cdn.pixabay.com/photo/2015/05/31/11/47/makeup-791303_960_720.jpg'                
            />
        </div>
    )
};

export default SearchPage;
