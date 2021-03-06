/*
C100R
0300.0BC7R
300R
*/

var tape = {
    name: 'Microchess',
    script: 'C100R\n0300.0BC7R\n300R\n',
    tracks: [[ // 0300.0BC7
        0xA2, 0x58, 0xBD, 0x80, 0x04, 0x20, 0xEF, 0xFF,
        0xCA, 0x10, 0xF7, 0x20, 0xE0, 0x05, 0x29, 0x03,
        0xF0, 0x10, 0xC9, 0x01, 0xF0, 0x06, 0xA0, 0xFF,
        0xA9, 0x00, 0xF0, 0x0A, 0xA0, 0xFB, 0xA9, 0x00,
        0xF0, 0x04, 0xA0, 0xFB, 0xA9, 0x08, 0x84, 0xBE,
        0x85, 0xBF, 0xEA, 0xEA, 0xA2, 0x00, 0xBD, 0xE6,
        0x09, 0xC9, 0xAB, 0xF0, 0x06, 0x20, 0xEF, 0xFF,
        0xE8, 0xD0, 0xF3, 0x20, 0xE0, 0x05, 0x29, 0x0F,
        0xC9, 0x0A, 0x30, 0x0B, 0xA5, 0xFF, 0x38, 0xE9,
        0x0A, 0xB0, 0xFC, 0x69, 0x0A, 0x29, 0x0E, 0x0A,
        0xAA, 0xBD, 0xEB, 0x03, 0x85, 0xFD, 0xBD, 0xEC,
        0x03, 0x85, 0xFE, 0xA0, 0x1B, 0xB1, 0xFD, 0x99,
        0xC0, 0x00, 0x88, 0x10, 0xF8, 0xA2, 0x10, 0xBD,
        0xEF, 0x05, 0x95, 0x2F, 0xCA, 0xD0, 0xF8, 0xA2,
        0x40, 0xBD, 0xAF, 0x06, 0x95, 0x6F, 0xCA, 0xD0,
        0xF8, 0x4C, 0x00, 0x04, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xA2, 0x1F, 0xB5,
        0x50, 0xC5, 0xFA, 0xF0, 0x03, 0xCA, 0x10, 0xF7,
        0x86, 0xFB, 0x86, 0xB0, 0xD8, 0xA2, 0xFF, 0x9A,
        0xA2, 0xC8, 0x86, 0xB2, 0x4C, 0x0B, 0x04, 0xC9,
        0xFF, 0xD0, 0x04, 0xA2, 0xD9, 0xD0, 0x0E, 0xC9,
        0xEE, 0xD0, 0x04, 0xA2, 0xE4, 0xD0, 0x06, 0xC9,
        0xCC, 0xD0, 0x0D, 0xA2, 0xF3, 0xBD, 0x00, 0x04,
        0xF0, 0x13, 0x20, 0xEF, 0xFF, 0xE8, 0xD0, 0xF5,
        0xB5, 0xF8, 0x20, 0xDC, 0xFF, 0xA9, 0xA0, 0x20,
        0xEF, 0xFF, 0xCA, 0xD0, 0xF3, 0xA9, 0x8D, 0x20,
        0xEF, 0xFF, 0x60, 0xB0, 0x0A, 0xCC, 0x0A, 0xE8,
        0x0A, 0x04, 0x0B, 0x20, 0x0B, 0x3C, 0x0B, 0x58,
        0x0B, 0x74, 0x0B, 0x90, 0x0B, 0xAC, 0x0B, 0x00,
        0xD8, 0xA2, 0xFF, 0x9A, 0xA2, 0xC8, 0x86, 0xB2,
        0x20, 0x00, 0x09, 0x20, 0x3D, 0x09, 0xEA, 0xEA,
        0xEA, 0xEA, 0x85, 0xF3, 0xC9, 0x0C, 0xD0, 0x0F,
        0xA2, 0x1F, 0xB5, 0x70, 0x95, 0x50, 0xCA, 0x10,
        0xF9, 0x86, 0xDC, 0xA9, 0xCC, 0xD0, 0x12, 0xC9,
        0x0E, 0xD0, 0x07, 0x20, 0xB2, 0x07, 0xA9, 0xEE,
        0xD0, 0x07, 0xC9, 0x14, 0xD0, 0x0B, 0x20, 0xA2,
        0x08, 0x85, 0xFB, 0x85, 0xFA, 0x85, 0xF9, 0xD0,
        0xBF, 0xC9, 0x0F, 0xD0, 0x06, 0x20, 0x50, 0x04,
        0x4C, 0x9D, 0x03, 0x4C, 0x96, 0x06, 0x00, 0x00,
        0x85, 0xB9, 0x86, 0xBA, 0x84, 0xBB, 0x20, 0x00,
        0x09, 0xA5, 0xB9, 0xA6, 0xBA, 0xA4, 0xBB, 0x4C,
        0x4B, 0x08, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0x8D, 0xA0, 0xA0, 0xBF, 0x8D, 0x8D, 0xDA, 0xD4,
        0xC9, 0xCC, 0xC2, 0xD2, 0xC5, 0xD0, 0xD5, 0xD3,
        0xBD, 0xB2, 0x8D, 0xDA, 0xD4, 0xC9, 0xCC, 0xC2,
        0xBD, 0xB1, 0x8D, 0xD9, 0xC1, 0xCC, 0xD0, 0xA0,
        0xCC, 0xC1, 0xCD, 0xD2, 0xCF, 0xCE, 0xBD, 0xB0,
        0x8D, 0x8D, 0xCD, 0xCF, 0xC3, 0xAE, 0xCF, 0xCC,
        0xCE, 0xC5, 0xC2, 0xAE, 0xD7, 0xD7, 0xD7, 0x8D,
        0xD3, 0xC7, 0xCE, 0xC9, 0xCE, 0xCE, 0xC5, 0xCA,
        0xA0, 0xD2, 0xC5, 0xD4, 0xC5, 0xD0, 0xA0, 0xD9,
        0xC2, 0x8D, 0x8D, 0xA9, 0xC3, 0xA8, 0xD3, 0xD3,
        0xC5, 0xC8, 0xC3, 0xCF, 0xD2, 0xC3, 0xC9, 0xCD,
        0x8D, 0xC3, 0xC8, 0xC5, 0xC3, 0xCB, 0xCD, 0xC1,
        0xD4, 0xC5, 0x8D, 0x00, 0xD2, 0xC5, 0xD6, 0xC5,
        0xD2, 0xD3, 0xC5, 0xA0, 0xD3, 0xC9, 0xC4, 0xC5,
        0xD3, 0x8D, 0x00, 0xCE, 0xC5, 0xD7, 0xA0, 0xC7,
        0xC1, 0xCD, 0xC5, 0x8D, 0x00, 0xFF, 0xFF, 0xFF,
        0x8A, 0x48, 0xA2, 0x08, 0xA9, 0xA1, 0x20, 0xEF,
        0xFF, 0xA9, 0xAD, 0x20, 0xEF, 0xFF, 0x20, 0xEF,
        0xFF, 0xCA, 0xD0, 0xF0, 0xA9, 0xA1, 0x20, 0xEF,
        0xFF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0x68, 0xAA,
        0x60, 0x84, 0xF4, 0x85, 0xF5, 0x86, 0xF6, 0xA9,
        0x8D, 0x20, 0xEF, 0xFF, 0x20, 0x00, 0x05, 0xA2,
        0x00, 0xA0, 0x00, 0xA9, 0xA1, 0x20, 0xEF, 0xFF,
        0x86, 0xF7, 0x84, 0xF8, 0x8A, 0x0A, 0x0A, 0x0A,
        0x0A, 0x65, 0xF8, 0xA2, 0x1F, 0xD5, 0x50, 0xF0,
        0x0E, 0xCA, 0x10, 0xF9, 0x20, 0xC9, 0x05, 0x4C,
        0x77, 0x05, 0xEA, 0xEA, 0xEA, 0xEA, 0xEA, 0x8A,
        0x4A, 0x4A, 0x4A, 0x4A, 0xEA, 0x18, 0x65, 0xB8,
        0x29, 0x01, 0xF0, 0x04, 0xA9, 0xC2, 0xD0, 0x02,
        0xA9, 0xD7, 0x20, 0xEF, 0xFF, 0x8A, 0xEA, 0x29,
        0x0F, 0xAA, 0xB5, 0x30, 0x20, 0xEF, 0xFF, 0xA6,
        0xF7, 0xA4, 0xF8, 0xC8, 0xC0, 0x08, 0xD0, 0xB3,
        0xA9, 0xA1, 0x20, 0xBC, 0x05, 0xA9, 0x8D, 0x20,
        0xEF, 0xFF, 0x20, 0x00, 0x05, 0xE8, 0xE0, 0x08,
        0xD0, 0x9F, 0xA4, 0xF4, 0xA9, 0x8D, 0x20, 0xEF,
        0xFF, 0xA9, 0xA0, 0x20, 0xEF, 0xFF, 0xA9, 0xB0,
        0xAA, 0x20, 0xEF, 0xFF, 0xA9, 0xA0, 0x20, 0xEF,
        0xFF, 0x20, 0xEF, 0xFF, 0xE8, 0x8A, 0xC9, 0xB8,
        0xD0, 0xEF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA5,
        0xF5, 0xA6, 0xF6, 0x60, 0x20, 0xEF, 0xFF, 0xA9,
        0xA0, 0x20, 0xEF, 0xFF, 0x8A, 0x20, 0xE5, 0xFF,
        0x60, 0x18, 0xA5, 0xF7, 0x65, 0xF8, 0x29, 0x01,
        0xF0, 0x04, 0xA9, 0xA0, 0xD0, 0x02, 0xA9, 0xAA,
        0x20, 0xEF, 0xFF, 0x20, 0xEF, 0xFF, 0x60, 0xEA,
        0xE6, 0xFF, 0xAD, 0x11, 0xD0, 0x10, 0xF9, 0xAD,
        0x10, 0xD0, 0x20, 0xEF, 0xFF, 0x60, 0xFF, 0xFF,
        0xCB, 0xD1, 0xD2, 0xD2, 0xC2, 0xC2, 0xCE, 0xCE,
        0xD0, 0xD0, 0xD0, 0xD0, 0xD0, 0xD0, 0xD0, 0xD0,
        0xA6, 0xB5, 0x30, 0x5C, 0xA5, 0xB0, 0xF0, 0x08,
        0xE0, 0x08, 0xD0, 0x04, 0xC5, 0xE6, 0xF0, 0x2E,
        0xF6, 0xE3, 0xC9, 0x01, 0xD0, 0x02, 0xF6, 0xE3,
        0x50, 0x1E, 0xA0, 0x0F, 0xA5, 0xB1, 0xD9, 0x60,
        0x00, 0xF0, 0x03, 0x88, 0x10, 0xF8, 0xB9, 0xA0,
        0x00, 0xD5, 0xE4, 0x90, 0x04, 0x94, 0xE6, 0x95,
        0xE4, 0x18, 0x08, 0x75, 0xE5, 0x95, 0xE5, 0x28,
        0xE0, 0x04, 0xF0, 0x03, 0x30, 0x31, 0x60, 0xA5,
        0xE8, 0x85, 0xDD, 0xA9, 0x00, 0x85, 0xB5, 0x20,
        0x4B, 0x08, 0x20, 0xB2, 0x07, 0x20, 0x00, 0x07,
        0x20, 0xB2, 0x07, 0xA9, 0x08, 0x85, 0xB5, 0x20,
        0x09, 0x07, 0x20, 0x31, 0x08, 0x4C, 0x80, 0x09,
        0xE0, 0xF9, 0xD0, 0x0B, 0xA5, 0x60, 0xC5, 0xB1,
        0xD0, 0x04, 0xA9, 0x00, 0x85, 0xB4, 0x60, 0x50,
        0xFD, 0xA0, 0x07, 0xA5, 0xB1, 0xD9, 0x60, 0x00,
        0xF0, 0x05, 0x88, 0xF0, 0xF1, 0x10, 0xF6, 0xB9,
        0xA0, 0x00, 0xD5, 0xE2, 0x90, 0x02, 0x95, 0xE2,
        0xC6, 0xB5, 0xA5, 0xBE, 0xC5, 0xB5, 0xF0, 0x03,
        0x20, 0x25, 0x08, 0xE6, 0xB5, 0x60, 0xC9, 0x08,
        0xB0, 0x12, 0x20, 0xEA, 0x08, 0xA2, 0x1F, 0xB5,
        0x50, 0xC5, 0xFA, 0xF0, 0x03, 0xCA, 0x10, 0xF7,
        0x86, 0xFB, 0x86, 0xB0, 0x4C, 0x0B, 0x04, 0xA0,
        0x03, 0x04, 0x00, 0x07, 0x02, 0x05, 0x01, 0x06,
        0x10, 0x17, 0x11, 0x16, 0x12, 0x15, 0x14, 0x13,
        0x73, 0x74, 0x70, 0x77, 0x72, 0x75, 0x71, 0x76,
        0x60, 0x67, 0x61, 0x66, 0x62, 0x65, 0x64, 0x63,
        0xF0, 0xFF, 0x01, 0x10, 0x11, 0x0F, 0xEF, 0xF1,
        0xDF, 0xE1, 0xEE, 0xF2, 0x12, 0x0E, 0x1F, 0x21,
        0x0B, 0x0A, 0x06, 0x06, 0x04, 0x04, 0x04, 0x04,
        0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02,
        0xA2, 0x1F, 0xB5, 0x70, 0x95, 0x50, 0xCA, 0x10,
        0xF9, 0x20, 0x21, 0x05, 0x60, 0xFF, 0xFF, 0xFF,
        0xA2, 0x10, 0xA9, 0x00, 0x95, 0xDE, 0xCA, 0x10,
        0xFB, 0xA9, 0x10, 0x85, 0xB0, 0xC6, 0xB0, 0x10,
        0x01, 0x60, 0x20, 0x1E, 0x08, 0xA4, 0xB0, 0xA2,
        0x08, 0x86, 0xB6, 0xC0, 0x08, 0x10, 0x41, 0xC0,
        0x06, 0x10, 0x2E, 0xC0, 0x04, 0x10, 0x1F, 0xC0,
        0x01, 0xF0, 0x09, 0x10, 0x0E, 0x20, 0x8E, 0x07,
        0xD0, 0xFB, 0xF0, 0xD9, 0x20, 0x9C, 0x07, 0xD0,
        0xFB, 0xF0, 0xD2, 0xA2, 0x04, 0x86, 0xB6, 0x20,
        0x9C, 0x07, 0xD0, 0xFB, 0xF0, 0xC7, 0x20, 0x9C,
        0x07, 0xA5, 0xB6, 0xC9, 0x04, 0xD0, 0xF7, 0xF0,
        0xBC, 0xA2, 0x10, 0x86, 0xB6, 0x20, 0x8E, 0x07,
        0xA5, 0xB6, 0xC9, 0x08, 0xD0, 0xF7, 0xF0, 0xAD,
        0xA2, 0x06, 0x86, 0xB6, 0x20, 0xCA, 0x07, 0x50,
        0x05, 0x30, 0x03, 0x20, 0x00, 0x06, 0x20, 0x1E,
        0x08, 0xC6, 0xB6, 0xA5, 0xB6, 0xC9, 0x05, 0xF0,
        0xEB, 0x20, 0xCA, 0x07, 0x70, 0x8F, 0x30, 0x8D,
        0x20, 0x00, 0x06, 0xA5, 0xB1, 0x29, 0xF0, 0xC9,
        0x20, 0xF0, 0xEE, 0x4C, 0x0D, 0x07, 0x20, 0xCA,
        0x07, 0x30, 0x03, 0x20, 0x00, 0x06, 0x20, 0x1E,
        0x08, 0xC6, 0xB6, 0x60, 0x20, 0xCA, 0x07, 0x90,
        0x02, 0x50, 0xF9, 0x30, 0x07, 0x08, 0x20, 0x00,
        0x06, 0x28, 0x50, 0xF0, 0x20, 0x1E, 0x08, 0xC6,
        0xB6, 0x60, 0xA2, 0x0F, 0x38, 0xB4, 0x60, 0xA9,
        0x77, 0xF5, 0x50, 0x95, 0x60, 0x94, 0x50, 0x38,
        0xA9, 0x77, 0xF5, 0x50, 0x95, 0x50, 0xCA, 0x10,
        0xEB, 0x60, 0xA5, 0xB1, 0xA6, 0xB6, 0x18, 0x75,
        0x8F, 0x85, 0xB1, 0x29, 0x88, 0xD0, 0x42, 0xA5,
        0xB1, 0xA2, 0x20, 0xCA, 0x30, 0x0E, 0xD5, 0x50,
        0xD0, 0xF9, 0xE0, 0x10, 0x30, 0x33, 0xA9, 0x7F,
        0x69, 0x01, 0x70, 0x01, 0xB8, 0xA5, 0xB5, 0x30,
        0x24, 0xC5, 0xBF, 0x10, 0x20, 0x48, 0x08, 0xA9,
        0xF9, 0x85, 0xB5, 0x85, 0xB4, 0x20, 0x4B, 0x08,
        0x20, 0xB2, 0x07, 0x20, 0x09, 0x07, 0x20, 0x2E,
        0x08, 0x28, 0x68, 0x85, 0xB5, 0xA5, 0xB4, 0x30,
        0x04, 0x38, 0xA9, 0xFF, 0x60, 0x18, 0xA9, 0x00,
        0x60, 0xA9, 0xFF, 0x18, 0xB8, 0x60, 0xA6, 0xB0,
        0xB5, 0x50, 0x85, 0xB1, 0x60, 0x20, 0x4B, 0x08,
        0x20, 0xB2, 0x07, 0x20, 0x09, 0x07, 0x20, 0xB2,
        0x07, 0xBA, 0x86, 0xB3, 0xA6, 0xB2, 0x9A, 0x68,
        0x85, 0xB6, 0x68, 0x85, 0xB0, 0xAA, 0x68, 0x95,
        0x50, 0x68, 0xAA, 0x68, 0x85, 0xB1, 0x95, 0x50,
        0x4C, 0x70, 0x08, 0xBA, 0x86, 0xB3, 0xA6, 0xB2,
        0x9A, 0xA5, 0xB1, 0x48, 0xA8, 0xA2, 0x1F, 0xD5,
        0x50, 0xF0, 0x03, 0xCA, 0x10, 0xF9, 0xA9, 0xCC,
        0x95, 0x50, 0x8A, 0x48, 0xA6, 0xB0, 0xB5, 0x50,
        0x94, 0x50, 0x48, 0x8A, 0x48, 0xA5, 0xB6, 0x48,
        0xBA, 0x86, 0xB2, 0xA6, 0xB3, 0x9A, 0x60, 0xA6,
        0xE4, 0xE4, 0xA0, 0xD0, 0x04, 0xA9, 0x00, 0xF0,
        0x0A, 0xA6, 0xE3, 0xD0, 0x06, 0xA6, 0xEE, 0xD0,
        0x02, 0xA9, 0xFF, 0xA2, 0x04, 0x86, 0xB5, 0xC5,
        0xFA, 0x90, 0x0C, 0xF0, 0x0A, 0x85, 0xFA, 0xA5,
        0xB0, 0x85, 0xFB, 0xA5, 0xB1, 0x85, 0xF9, 0x60,
        0xEA, 0xEA, 0xA6, 0xDC, 0x10, 0x17, 0xA5, 0xF9,
        0xD5, 0xDC, 0xD0, 0x0F, 0xCA, 0xB5, 0xDC, 0x85,
        0xFB, 0xCA, 0xB5, 0xDC, 0x85, 0xF9, 0xCA, 0x86,
        0xDC, 0xD0, 0x1A, 0x85, 0xDC, 0xA2, 0x0C, 0x86,
        0xB5, 0x86, 0xFA, 0xA2, 0x14, 0x20, 0x02, 0x07,
        0xA2, 0x04, 0x86, 0xB5, 0x20, 0x00, 0x07, 0xA6,
        0xFA, 0xE0, 0x0F, 0x90, 0x12, 0xA6, 0xFB, 0xB5,
        0x50, 0x85, 0xFA, 0x86, 0xB0, 0xA5, 0xF9, 0x85,
        0xB1, 0x20, 0x4B, 0x08, 0x4C, 0xFA, 0x08, 0xA9,
        0xFF, 0x60, 0xA2, 0x04, 0x06, 0xF9, 0x26, 0xFA,
        0xCA, 0xD0, 0xF9, 0x05, 0xF9, 0x85, 0xF9, 0x85,
        0xB1, 0x60, 0x20, 0x21, 0x05, 0x4C, 0x00, 0x04,
        0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA2, 0x03, 0xA5,
        0xFB, 0x30, 0x27, 0x4A, 0x4A, 0x4A, 0x4A, 0x18,
        0x65, 0xB8, 0x29, 0x01, 0xD0, 0x04, 0xA9, 0xD7,
        0xD0, 0x02, 0xA9, 0xC2, 0x20, 0xEF, 0xFF, 0xB5,
        0xF8, 0x29, 0x0F, 0xAA, 0xB5, 0x30, 0x20, 0xEF,
        0xFF, 0xA2, 0x02, 0xA9, 0xA0, 0x20, 0xEF, 0xFF,
        0xB5, 0xF8, 0x20, 0xB7, 0x03, 0x60, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x20, 0xE0, 0x05,
        0xC9, 0x8D, 0xD0, 0x03, 0xA9, 0x14, 0x60, 0xC9,
        0xC7, 0xD0, 0x0A, 0xA9, 0x00, 0x85, 0xB8, 0x20,
        0xF0, 0x06, 0xA9, 0x0C, 0x60, 0xC9, 0xD2, 0xD0,
        0x05, 0xE6, 0xB8, 0xA9, 0x0E, 0x60, 0xC9, 0xCD,
        0xD0, 0x03, 0xA9, 0x0F, 0x60, 0xC9, 0xCC, 0xD0,
        0x03, 0x4C, 0x00, 0x03, 0xC9, 0xD1, 0xD0, 0x03,
        0x4C, 0x00, 0xFF, 0xC9, 0xD0, 0xD0, 0x06, 0x20,
        0x21, 0x05, 0x4C, 0x3D, 0x09, 0x29, 0x07, 0x60,
        0x18, 0xA9, 0x80, 0x65, 0xEB, 0x65, 0xEC, 0x65,
        0xED, 0x65, 0xE1, 0x65, 0xDF, 0x38, 0xE5, 0xF0,
        0xE5, 0xF1, 0xE5, 0xE2, 0xE5, 0xE0, 0xE5, 0xDE,
        0xE5, 0xEF, 0xE5, 0xE3, 0xB0, 0x02, 0xA9, 0x00,
        0x4A, 0x18, 0x69, 0x40, 0x65, 0xEC, 0x65, 0xED,
        0x38, 0xE5, 0xE4, 0x4A, 0x18, 0x69, 0x90, 0x65,
        0xDD, 0x65, 0xDD, 0x65, 0xDD, 0x65, 0xDD, 0x65,
        0xE1, 0x38, 0xE5, 0xE4, 0xE5, 0xE4, 0xE5, 0xE5,
        0xE5, 0xE5, 0xE5, 0xE0, 0xA6, 0xB1, 0xE0, 0x33,
        0xF0, 0x16, 0xE0, 0x34, 0xF0, 0x12, 0xE0, 0x22,
        0xF0, 0x0E, 0xE0, 0x25, 0xF0, 0x0A, 0xA6, 0xB0,
        0xF0, 0x09, 0xB4, 0x50, 0xC0, 0x10, 0x10, 0x03,
        0x18, 0x69, 0x02, 0x4C, 0x77, 0x08, 0x8D, 0x8D,
        0xCF, 0xD0, 0xC5, 0xCE, 0xC9, 0xCE, 0xC7, 0xD3,
        0x8D, 0x8D, 0xC3, 0xCF, 0xCD, 0xD0, 0xD5, 0xD4,
        0xC5, 0xD2, 0xAE, 0xAE, 0xAE, 0xAE, 0xAE, 0xAE,
        0xAE, 0xAE, 0xD7, 0xC8, 0xC9, 0xD4, 0xC5, 0xA0,
        0xC2, 0xCC, 0xC1, 0xC3, 0xCB, 0x8D, 0xC6, 0xD2,
        0xC5, 0xCE, 0xC3, 0xC8, 0xA0, 0xC4, 0xC5, 0xC6,
        0xC5, 0xCE, 0xC3, 0xC5, 0xAE, 0xAE, 0xAE, 0xB0,
        0xA0, 0xA0, 0xA0, 0xA0, 0xA0, 0xB1, 0x8D, 0xC7,
        0xC9, 0xD5, 0xCF, 0xC3, 0xCF, 0xA0, 0xD0, 0xC9,
        0xC1, 0xCE, 0xCF, 0xAE, 0xAE, 0xAE, 0xAE, 0xAE,
        0xB2, 0xA0, 0xA0, 0xA0, 0xA0, 0xA0, 0xB3, 0x8D,
        0xD2, 0xD5, 0xD9, 0xA0, 0xCC, 0xCF, 0xD0, 0xC5,
        0xDA, 0xAE, 0xAE, 0xAE, 0xAE, 0xAE, 0xAE, 0xAE,
        0xAE, 0xB4, 0xA0, 0xA0, 0xA0, 0xA0, 0xA0, 0xB5,
        0x8D, 0xD1, 0xD5, 0xC5, 0xC5, 0xCE, 0xA7, 0xD3,
        0xA0, 0xC9, 0xCE, 0xC4, 0xC9, 0xC1, 0xCE, 0xAE,
        0xAE, 0xAE, 0xB6, 0xA0, 0xA0, 0xA0, 0xA0, 0xA0,
        0xB7, 0x8D, 0xC6, 0xCF, 0xD5, 0xD2, 0xA0, 0xCB,
        0xCE, 0xC9, 0xC7, 0xC8, 0xD4, 0xD3, 0xAE, 0xAE,
        0xAE, 0xAE, 0xAE, 0xB8, 0xA0, 0xA0, 0xA0, 0xA0,
        0xA0, 0xB9, 0x8D, 0x8D, 0xC6, 0xCF, 0xD2, 0xA0,
        0xD2, 0xC1, 0xCE, 0xC4, 0xCF, 0xCD, 0xA0, 0xCF,
        0xD0, 0xC5, 0xCE, 0xC9, 0xCE, 0xC7, 0xAC, 0xA0,
        0xD0, 0xD2, 0xC5, 0xD3, 0xD3, 0xA0, 0xC5, 0xCE,
        0xD4, 0xC5, 0xD2, 0x8D, 0xBF, 0xAB, 0x00, 0x00,
        0x99, 0x22, 0x06, 0x45, 0x32, 0x0C, 0x72, 0x14,
        0x01, 0x63, 0x63, 0x05, 0x64, 0x43, 0x0F, 0x63,
        0x41, 0x05, 0x52, 0x25, 0x07, 0x44, 0x34, 0x0E,
        0x53, 0x33, 0x0F, 0xCC, 0x99, 0x22, 0x07, 0x55,
        0x32, 0x0D, 0x45, 0x06, 0x00, 0x63, 0x14, 0x01,
        0x14, 0x13, 0x06, 0x34, 0x14, 0x04, 0x36, 0x25,
        0x06, 0x52, 0x33, 0x0E, 0x43, 0x24, 0x0F, 0x44,
        0x99, 0x25, 0x0B, 0x25, 0x01, 0x00, 0x33, 0x25,
        0x07, 0x36, 0x34, 0x0D, 0x34, 0x34, 0x0E, 0x52,
        0x25, 0x0D, 0x45, 0x35, 0x04, 0x55, 0x22, 0x06,
        0x43, 0x33, 0x0F, 0xCC, 0x99, 0x52, 0x04, 0x52,
        0x52, 0x06, 0x75, 0x44, 0x06, 0x52, 0x41, 0x04,
        0x43, 0x43, 0x0F, 0x43, 0x25, 0x06, 0x52, 0x32,
        0x04, 0x42, 0x22, 0x07, 0x55, 0x34, 0x0F, 0x44,
        0x99, 0x25, 0x07, 0x66, 0x43, 0x0E, 0x55, 0x55,
        0x04, 0x54, 0x13, 0x01, 0x63, 0x34, 0x0E, 0x33,
        0x01, 0x00, 0x52, 0x46, 0x04, 0x55, 0x22, 0x06,
        0x43, 0x33, 0x0F, 0xCC, 0x99, 0x06, 0x00, 0x52,
        0x11, 0x06, 0x34, 0x22, 0x0B, 0x22, 0x23, 0x06,
        0x64, 0x14, 0x04, 0x43, 0x44, 0x06, 0x75, 0x25,
        0x06, 0x31, 0x22, 0x07, 0x55, 0x34, 0x0F, 0x44,
        0x99, 0x25, 0x01, 0x25, 0x15, 0x01, 0x33, 0x25,
        0x07, 0x72, 0x01, 0x00, 0x63, 0x11, 0x04, 0x66,
        0x21, 0x0A, 0x56, 0x22, 0x06, 0x53, 0x35, 0x0D,
        0x52, 0x34, 0x0E, 0xCC, 0x99, 0x35, 0x0C, 0x52,
        0x52, 0x06, 0x62, 0x44, 0x06, 0x52, 0x06, 0x00,
        0x75, 0x14, 0x04, 0x66, 0x11, 0x05, 0x56, 0x21,
        0x0B, 0x55, 0x24, 0x0F, 0x42, 0x25, 0x06, 0x43,
        0x99, 0x03, 0x02, 0x63, 0x25, 0x0B, 0x25, 0x41,
        0x05, 0x54, 0x24, 0x0E, 0x72, 0x01, 0x00, 0x36,
        0x46, 0x04, 0x52, 0x25, 0x07, 0x55, 0x22, 0x06,
        0x43, 0x33, 0x0F, 0xCC, 0x99, 0x03, 0x07, 0x74,
        0x14, 0x01, 0x52, 0x52, 0x04, 0x36, 0x23, 0x0E,
        0x53, 0x06, 0x00, 0x75, 0x41, 0x04, 0x31, 0x25,
        0x06, 0x52, 0x22, 0x07, 0x55, 0x34, 0x0F, 0x44
    ]]
};

module.exports = tape;
