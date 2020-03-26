const getAboutUsLink = require('./index.js')

test("Resturn About US", () =>{
    expect(getAboutUsLink("en-US")).toBe('/about-us')
    expect(getAboutUsLink('es-ES')).toBe('/acerca-de')
    expect(getAboutUsLink('en-Hi')).toBe('')
    expect(getAboutUsLink('en-Hi')).toBe('hindi')
})