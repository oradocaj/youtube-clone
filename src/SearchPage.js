import React from 'react';
import  ChannelRow from './ChannelRow';
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
                image='https://cdn.pixabay.com/photo/2015/05/31/13/29/lipstick-791761_960_720.jpg'
                channel='Tanjica Bananica'
                verified
                subs='659K'
                noOfVideos={382}
                description='You can find some awesome makeup tutorials here.'        
            />
        </div>
    )
};

export default SearchPage;
