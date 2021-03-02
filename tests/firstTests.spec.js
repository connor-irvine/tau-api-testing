const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"});
});


describe('First test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err,res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });
    
    it('Mocky OK response', (done) => {
        request('https://www.mocky.io/')
        .get('v3/2e8cc3d6-f3a8-431e-b29c-0468753578a3')
        .expect(200, done);
    });
});

