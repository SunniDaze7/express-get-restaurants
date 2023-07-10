const request = require('supertest')

const app = require('./src/app')

describe('requests function properly', ()=>{
    //get restaurants status 200
    //get restaurants is array
    //get restaurants has correct number of restautants
    //put restaurnant id updates array
    test('can read restaurant', async()=>{
        const response = await request(app).get('/restaurants')
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBe(4)
        expect(response.body[0].name).toBe('AppleBees')
    })
    //post resturns updated restaurant array
    test('can POST', async()=>{
        const response = await request(app).post('/restaurants').send({name: 'Alice', location: 'london', cuisine: 'french'})
        expect(response.body.name).toBe("Alice")
      })
    //delete restaurant id deletes correct restaurnat
    test('can DELETE', async()=>{
        const response = await request(app).delete('/restaurants/:id')
        expect(response).toBe(404)
      })
}) 