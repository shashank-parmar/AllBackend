const express = require('express')
const shortid = require('shortid')
const URL=require('../controller/url')


async function handlerNewGenrateURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400)
    const shortID = shortid();

    const okk = await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory:[],
    })
    console.log(okk)
    return res.json({id:shortId})
}

module.exports ={
    handlerNewGenrateURL,
}