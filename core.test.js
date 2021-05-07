// import createCore from './core.js'
const createCore = require("./core")

describe('Core quando importado',()=>{
  test('Deve ter o método #start e #stop',()=>{
    const core = createCore()
    expect(core).toHaveProperty('start')
    expect(core).toHaveProperty('stop')
  })
})

describe('Core quando inicializado',()=>{
  test('Não deve retornar erros',()=>{
    const core = createCore()
    expect(()=>{
      core.start()
    }).not.toThrow()
  })
})