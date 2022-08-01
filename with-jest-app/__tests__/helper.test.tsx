import { convertIntegerToRoman } from '@/pages/_helper'

describe('Test Convert Integer to Roman Function', () => {
  it('test convert 1 to Roman', () => {
    expect(convertIntegerToRoman(1)).toBe('I')
  })

  it('test convert 3 to Roman', () => {
    expect(convertIntegerToRoman(3)).toBe('III')
  })

  it('test convert 4 to Roman', () => {
    expect(convertIntegerToRoman(4)).toBe('IV')
  })

  it('test convert 5 to Roman', () => {
    expect(convertIntegerToRoman(5)).toBe('V')
  })

  it('test convert 9 to Roman', () => {
    expect(convertIntegerToRoman(9)).toBe('IX')
  })

  it('test convert 10 to Roman', () => {
    expect(convertIntegerToRoman(10)).toBe('X')
  })

  it('test convert 14 to Roman', () => {
    expect(convertIntegerToRoman(14)).toBe('XIV')
  })

  it('test convert 20 to Roman', () => {
    expect(convertIntegerToRoman(20)).toBe('XX')
  })

  it('test convert 29 to Roman', () => {
    expect(convertIntegerToRoman(29)).toBe('XXIX')
  })

  it('test convert 40 to Roman', () => {
    expect(convertIntegerToRoman(40)).toBe('XL')
  })

  it('test convert 50 to Roman', () => {
    expect(convertIntegerToRoman(50)).toBe('L')
  })
  
  it('test convert 90 to Roman', () => {
    expect(convertIntegerToRoman(90)).toBe('XC')
  })
  
  it('test convert 100 to Roman', () => {
    expect(convertIntegerToRoman(100)).toBe('C')
  })
  
  it('test convert 399 to Roman', () => {
    expect(convertIntegerToRoman(399)).toBe('CCCXCIX')
  })

  it('test convert 400 to Roman', () => {
    expect(convertIntegerToRoman(400)).toBe('CD')
  })

  it('test convert 500 to Roman', () => {
    expect(convertIntegerToRoman(500)).toBe('D')
  })

  it('test convert 594 to Roman', () => {
    expect(convertIntegerToRoman(594)).toBe('DXCIV')
  })

  it('test convert 700 to Roman', () => {
    expect(convertIntegerToRoman(700)).toBe('DCC')
  })
  
  it('test convert 900 to Roman', () => {
    expect(convertIntegerToRoman(900)).toBe('CM')
  })

  it('test convert 941 to Roman', () => {
    expect(convertIntegerToRoman(941)).toBe('CMXLI')
  })
  
  it('test convert 1000 to Roman', () => {
    expect(convertIntegerToRoman(1000)).toBe('M')
  })
})
