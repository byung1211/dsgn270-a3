/**
 * Author: Byung Uk An
 * Date: 2021.12.02
 */

const express = require('express');
const router = express.Router();

// Twitter configuration
const accountId = '1466599339816468485';
const {TwitterApi} = require('twitter-api-v2');
const client = new TwitterApi({
  appKey: 'V4b1DSVQaTS5W6lTHuZv8yu5P',
  appSecret: 'yrl14jGVwdwoI3vOKZRzfhTZkHMGpcmMY1xdmt7WwDeZGwqZ8p',
  accessToken: '1466599339816468485-FdXJ1YhbC2cP3GVmAs0KHXFgxFFAcU',
  accessSecret: 'e4UZR0RcmGZpBJsKov6TiWOYJMpFGdCAvGwaEOBflLWAs',
});

router.get('/our-tweets', async (req, res) => {
  
  console.log('tweets called....');

  try{
    
    client.v2.userTimeline(accountId, {
      'tweet.fields': [
          'created_at',
      ],
    }).then((timeline) => {

      console.log("-------------------------------------------------------------------");
      console.log("RAW Data:"+JSON.stringify(timeline));

      if (!timeline.data) {
        throw new Error()
      }
    
      res.send(timeline.data)
  
    }).catch((err) => {
        console.log(err)
    })

  }catch(error){
    res.send({ERROR: 'No Data Found'})
  }
})

module.exports = router;