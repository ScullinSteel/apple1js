/*
C100R
004A.00FFR 0300.0FFFR
E2B3R
RUN
*/

var tape = {
    name: 'Checkers',
    script: 'C100R\n004A.00FFR 0300.0FFFR\nE2B3R\nRUN\n',
    tracks: [[ // 004A.00FF
        0x00, 0x03, 0x00, 0x10, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x02, 0xED, 0x08, 0x02, 0xF8, 0x02, 0x01, 0xF6,
        0xED, 0xED, 0xED, 0xED, 0xED, 0xEC, 0xEC, 0xEC,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x82, 0x00, 0x00, 0x00, 0x00, 0x11, 0x03,
        0x59, 0x9C, 0x7D, 0x7D, 0x82, 0x53, 0x5B, 0x61,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x24, 0x00, 0x00, 0xFF, 0x00, 0x00, 0x07,
        0x1D, 0x1E, 0x09, 0xFF, 0x02, 0x01, 0x01, 0xFF,
        0xFF, 0x04, 0x36, 0x04, 0xFE, 0x03, 0x1F, 0xFA,
        0xF2, 0x03, 0xFE, 0x03, 0x00, 0xFF, 0x27, 0x02,
        0x00, 0xFE, 0x1F, 0x0E, 0x0D, 0x0E, 0x00, 0x00,
        0x33, 0x0E, 0x00, 0x10, 0x6A, 0xAA, 0x40, 0x00,
        0x3B, 0x3A, 0x3D, 0x23, 0x03, 0x08, 0x07, 0x07,
        0x03, 0x0B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0xB8, 0x00, 0x00, 0x00, 0x20, 0x00, 0xEC
    ],[
        0xA4, 0x00, 0x0E, 0x03, 0x9D, 0xFF, 0x01, 0x00,
        0x07, 0x00, 0x02, 0x00, 0x06, 0x00, 0xA6, 0x00,
        0x92, 0x03, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00,
        0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
        0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
        0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00,
        0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00,
        0xFF, 0xFF, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00,
        0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF,
        0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0xFF, 0xFF,
        0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00,
        0xFF, 0xFF, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00,
        0xFF, 0xFF, 0x8E, 0x00, 0x98, 0x03, 0xFF, 0xFF,
        0xB0, 0x00, 0x9E, 0x03, 0x09, 0x00, 0xB2, 0x00,
        0xA4, 0x03, 0x00, 0x00, 0x82, 0x00, 0xAA, 0x03,
        0x03, 0x00, 0x84, 0x00, 0xB0, 0x03, 0xFF, 0xFF,
        0xAA, 0x00, 0xB6, 0x03, 0x09, 0x00, 0xAC, 0x00,
        0xBC, 0x03, 0x07, 0x00, 0xA2, 0x00, 0xC2, 0x03,
        0x00, 0x00, 0x86, 0x00, 0xC8, 0x03, 0x03, 0x00,
        0xAA, 0xB1, 0xCE, 0x03, 0x00, 0x00, 0xAC, 0xB1,
        0xD4, 0x03, 0x00, 0x00, 0xB0, 0xB1, 0xDA, 0x03,
        0x06, 0x00, 0xB2, 0xB1, 0xE0, 0x03, 0x06, 0x00,
        0x94, 0x00, 0xE6, 0x03, 0x09, 0x00, 0x98, 0x00,
        0xEC, 0x03, 0x09, 0x00, 0x9A, 0x00, 0xF2, 0x03,
        0x09, 0x00, 0x8A, 0x00, 0xF8, 0x03, 0x01, 0x00,
        0x90, 0x00, 0xFE, 0x03, 0x03, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x45, 0x01,
        0x00, 0x5D, 0xA0, 0xC3, 0xCF, 0xCE, 0xD6, 0xC5,
        0xD2, 0xD3, 0xC9, 0xCF, 0xCE, 0xA0, 0xC2, 0xD9,
        0xA0, 0xD6, 0xC9, 0xCE, 0xC3, 0xC5, 0xA0, 0xC2,
        0xD2, 0xC9, 0xC5, 0xCC, 0xA0, 0xB1, 0xAF, 0xB2,
        0xB8, 0xAF, 0xB2, 0xB0, 0xB0, 0xB7, 0xA0, 0xD5,
        0xD0, 0xC4, 0xC1, 0xD4, 0xC5, 0xC4, 0xA0, 0xC3,
        0xCF, 0xD2, 0xC5, 0xD9, 0xA0, 0xC3, 0xCF, 0xC8,
        0xC5, 0xCE, 0xA0, 0xB1, 0xB2, 0xAF, 0xB2, 0xB0,
        0xB1, 0xB1, 0x01, 0x1E, 0x02, 0x00, 0x50, 0x38,
        0xB1, 0x10, 0x00, 0x72, 0x03, 0x61, 0x28, 0xC1,
        0xD0, 0xD0, 0xCC, 0xC5, 0xAD, 0xC9, 0xA0, 0xC3,
        0xC8, 0xC5, 0xC3, 0xCB, 0xC5, 0xD2, 0xD3, 0x29,
        0x01, 0x24, 0x03, 0x00, 0x61, 0x28, 0xC3, 0xCF,
        0xCD, 0xD0, 0xD5, 0xD4, 0xC5, 0xD2, 0xA0, 0xC9,
        0xD3, 0xA0, 0xD8, 0xAC, 0xA0, 0xC1, 0xCE, 0xC4,
        0xA0, 0xD9, 0xCF, 0xD5, 0xA0, 0xC1, 0xD2, 0xC5,
        0xA0, 0xCF, 0xAE, 0x29, 0x01, 0x22, 0x04, 0x00,
        0x61, 0x28, 0xCD, 0xCF, 0xD6, 0xC5, 0xD3, 0xA0,
        0xC1, 0xD2, 0xC5, 0xA0, 0xC5, 0xCE, 0xD4, 0xC5,
        0xD2, 0xC5, 0xC4, 0xA0, 0xD5, 0xD3, 0xC9, 0xCE,
        0xC7, 0xA0, 0xC8, 0xAC, 0xD6, 0x29, 0x01, 0x3C,
        0x06, 0x00, 0x4F, 0xD2, 0x34, 0xB5, 0x05, 0x00,
        0x72, 0x44, 0xD3, 0x34, 0xB6, 0x40, 0x00, 0x72,
        0x03, 0xC7, 0x71, 0x36, 0xB1, 0x01, 0x00, 0x03,
        0xD2, 0x2D, 0xB1, 0x01, 0x00, 0x72, 0x71, 0x36,
        0xB9, 0x63, 0x00, 0x03, 0x55, 0xD8, 0x56, 0xB1,
        0x01, 0x00, 0x57, 0xB6, 0x40, 0x00, 0x03, 0xD3,
        0x2D, 0xD8, 0x72, 0x71, 0xB0, 0x00, 0x00, 0x03,
        0x59, 0xD8, 0x01, 0x87, 0x07, 0x00, 0xD3, 0x2D,
        0xB1, 0x01, 0x00, 0x72, 0x71, 0xB1, 0x01, 0x00,
        0x03, 0xD3, 0x2D, 0xB3, 0x03, 0x00, 0x72, 0x71,
        0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB5, 0x05,
        0x00, 0x72, 0x71, 0xB1, 0x01, 0x00, 0x03, 0xD3,
        0x2D, 0xB7, 0x07, 0x00, 0x72, 0x71, 0xB1, 0x01,
        0x00, 0x03, 0xD3, 0x2D, 0xB1, 0x0A, 0x00, 0x72,
        0x71, 0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB1,
        0x0C, 0x00, 0x72, 0x71, 0xB1, 0x01, 0x00, 0x03,
        0xD3, 0x2D, 0xB1, 0x0E, 0x00, 0x72, 0x71, 0xB1,
        0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB1, 0x10, 0x00,
        0x72, 0x71, 0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D,
        0xB1, 0x11, 0x00, 0x72, 0x71, 0xB1, 0x01, 0x00,
        0x03, 0xD3, 0x2D, 0xB1, 0x13, 0x00, 0x72, 0x71,
        0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB2, 0x15,
        0x00, 0x72, 0x71, 0xB1, 0x01, 0x00, 0x03, 0xD3,
        0x2D, 0xB2, 0x17, 0x00, 0x72, 0x71, 0xB1, 0x01,
        0x00, 0x01, 0x4B, 0x08, 0x00, 0xD3, 0x2D, 0xB4,
        0x2A, 0x00, 0x72, 0x71, 0x36, 0xB1, 0x01, 0x00,
        0x03, 0xD3, 0x2D, 0xB4, 0x2C, 0x00, 0x72, 0x71,
        0x36, 0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB4,
        0x2E, 0x00, 0x72, 0x71, 0x36, 0xB1, 0x01, 0x00,
        0x03, 0xD3, 0x2D, 0xB4, 0x30, 0x00, 0x72, 0x71,
        0x36, 0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB4,
        0x31, 0x00, 0x72, 0x71, 0x36, 0xB1, 0x01, 0x00,
        0x03, 0xD3, 0x2D, 0xB5, 0x33, 0x00, 0x72, 0x71,
        0x36, 0xB1, 0x01, 0x00, 0x01, 0x4B, 0x09, 0x00,
        0xD3, 0x2D, 0xB5, 0x35, 0x00, 0x72, 0x71, 0x36,
        0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB5, 0x37,
        0x00, 0x72, 0x71, 0x36, 0xB1, 0x01, 0x00, 0x03,
        0xD3, 0x2D, 0xB5, 0x3A, 0x00, 0x72, 0x71, 0x36,
        0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB6, 0x3C,
        0x00, 0x72, 0x71, 0x36, 0xB1, 0x01, 0x00, 0x03,
        0xD3, 0x2D, 0xB6, 0x3E, 0x00, 0x72, 0x71, 0x36,
        0xB1, 0x01, 0x00, 0x03, 0xD3, 0x2D, 0xB6, 0x40,
        0x00, 0x72, 0x71, 0x36, 0xB1, 0x01, 0x00, 0x01,
        0x34, 0x0A, 0x00, 0x55, 0xD8, 0x56, 0xB1, 0x01,
        0x00, 0x57, 0xB8, 0x08, 0x00, 0x03, 0x55, 0xD9,
        0x56, 0xB1, 0x01, 0x00, 0x57, 0xB8, 0x08, 0x00,
        0x03, 0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00,
        0x14, 0xD9, 0x12, 0xD8, 0x72, 0x13, 0xB8, 0x08,
        0x00, 0x72, 0x19, 0x36, 0xB1, 0x01, 0x00, 0x24,
        0xB3, 0x5E, 0x01, 0x01, 0x1E, 0x36, 0x01, 0x60,
        0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xD9,
        0x12, 0xD8, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72,
        0x17, 0x36, 0xB1, 0x01, 0x00, 0x24, 0xB3, 0x4A,
        0x01, 0x01, 0x1F, 0x40, 0x01, 0x55, 0xC1, 0x56,
        0x36, 0xB1, 0x01, 0x00, 0x57, 0xB1, 0x01, 0x00,
        0x58, 0xB2, 0x02, 0x00, 0x03, 0xC2, 0x71, 0xC7,
        0x03, 0x5C, 0xB6, 0x8A, 0x02, 0x03, 0x59, 0xC1,
        0x01, 0x1E, 0x4A, 0x01, 0x60, 0xD3, 0x2D, 0x38,
        0xB8, 0x08, 0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72,
        0x13, 0xB8, 0x08, 0x00, 0x72, 0x17, 0x36, 0xB2,
        0x02, 0x00, 0x24, 0xB3, 0x5E, 0x01, 0x01, 0x2D,
        0x54, 0x01, 0x55, 0xC1, 0x56, 0x36, 0xB1, 0x01,
        0x00, 0x57, 0xB1, 0x01, 0x00, 0x58, 0xB2, 0x02,
        0x00, 0x03, 0x55, 0xC2, 0x56, 0x36, 0xB1, 0x01,
        0x00, 0x57, 0xB1, 0x01, 0x00, 0x58, 0xB2, 0x02,
        0x00, 0x03, 0x5C, 0xB6, 0x8A, 0x02, 0x03, 0x59,
        0xC2, 0x5A, 0xC1, 0x01, 0x0D, 0x5E, 0x01, 0x59,
        0xD9, 0x5A, 0xD8, 0x03, 0x5F, 0xB1, 0x74, 0x04,
        0x01, 0x2C, 0x8A, 0x02, 0xD5, 0x71, 0xD8, 0x12,
        0xC1, 0x03, 0xD6, 0x71, 0xD9, 0x12, 0xC2, 0x03,
        0x60, 0xD5, 0x1C, 0xB1, 0x01, 0x00, 0x1E, 0xD5,
        0x19, 0xB8, 0x08, 0x00, 0x1E, 0xD6, 0x1C, 0xB1,
        0x01, 0x00, 0x1E, 0xD6, 0x19, 0xB8, 0x08, 0x00,
        0x24, 0xB8, 0x66, 0x03, 0x01, 0x1D, 0xE4, 0x02,
        0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14,
        0xD6, 0x12, 0xD5, 0x72, 0x13, 0xB8, 0x08, 0x00,
        0x72, 0x17, 0xB0, 0x00, 0x00, 0x24, 0xB7, 0x02,
        0x03, 0x01, 0x0D, 0xEE, 0x02, 0x5C, 0xB9, 0x8E,
        0x03, 0x03, 0x5F, 0xB8, 0x66, 0x03, 0x01, 0x1D,
        0x02, 0x03, 0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08,
        0x00, 0x14, 0xD6, 0x12, 0xD5, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x1C, 0xB0, 0x00, 0x00, 0x24,
        0xB8, 0x66, 0x03, 0x01, 0x2C, 0x16, 0x03, 0xD5,
        0x71, 0xD5, 0x12, 0xC1, 0x03, 0xD6, 0x71, 0xD6,
        0x12, 0xC2, 0x03, 0x60, 0xD5, 0x1C, 0xB1, 0x01,
        0x00, 0x1E, 0xD6, 0x1C, 0xB1, 0x01, 0x00, 0x1E,
        0xD5, 0x19, 0xB8, 0x08, 0x00, 0x1E, 0xD6, 0x19,
        0xB8, 0x08, 0x00, 0x24, 0xB8, 0x66, 0x03, 0x01,
        0x1E, 0x52, 0x03, 0x60, 0xD3, 0x2D, 0x38, 0xB8,
        0x08, 0x00, 0x14, 0xD6, 0x12, 0xD5, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x16, 0xB0, 0x00, 0x00,
        0x25, 0x5C, 0xB9, 0x8E, 0x03, 0x01, 0x05, 0x66,
        0x03, 0x5B, 0x01, 0x28, 0x8E, 0x03, 0x60, 0xD6,
        0x16, 0xB0, 0x00, 0x00, 0x1D, 0xD3, 0x2D, 0x38,
        0xB8, 0x08, 0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72,
        0x13, 0xB8, 0x08, 0x00, 0x72, 0x16, 0x36, 0xB1,
        0x01, 0x00, 0x25, 0xD1, 0x71, 0xD1, 0x12, 0xB2,
        0x02, 0x00, 0x01, 0x17, 0x98, 0x03, 0x60, 0x31,
        0x3F, 0xD9, 0x13, 0xD6, 0x72, 0x16, 0xB2, 0x02,
        0x00, 0x25, 0xD1, 0x71, 0xD1, 0x12, 0xB5, 0x05,
        0x00, 0x01, 0x12, 0xC0, 0x03, 0x60, 0xD9, 0x16,
        0xB8, 0x08, 0x00, 0x25, 0xD1, 0x71, 0xD1, 0x13,
        0xB2, 0x02, 0x00, 0x01, 0x18, 0xD4, 0x03, 0x60,
        0xD5, 0x16, 0xB1, 0x01, 0x00, 0x1E, 0xD5, 0x16,
        0xB8, 0x08, 0x00, 0x25, 0xD1, 0x71, 0xD1, 0x12,
        0xB1, 0x01, 0x00, 0x01, 0x30, 0x06, 0x04, 0x55,
        0xC3, 0x56, 0x36, 0xB1, 0x01, 0x00, 0x57, 0xB1,
        0x01, 0x00, 0x58, 0xB2, 0x02, 0x00, 0x03, 0x60,
        0xD5, 0x12, 0xC3, 0x1C, 0xB1, 0x01, 0x00, 0x1E,
        0xD5, 0x12, 0xC3, 0x19, 0xB8, 0x08, 0x00, 0x1E,
        0xD6, 0x12, 0xC7, 0x1C, 0xB1, 0x01, 0x00, 0x24,
        0xB1, 0x38, 0x04, 0x01, 0x1F, 0x08, 0x04, 0xD5,
        0xB1, 0x71, 0xD5, 0x12, 0xC3, 0x03, 0xD6, 0xB1,
        0x71, 0xD6, 0x12, 0xC7, 0x03, 0xD8, 0xB1, 0x71,
        0xD5, 0x13, 0xC3, 0x03, 0xD9, 0xB1, 0x71, 0xD6,
        0x13, 0xC7, 0x01, 0x1F, 0x0B, 0x04, 0x60, 0xD3,
        0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xD6, 0xB1,
        0x12, 0xD5, 0xB1, 0x72, 0x13, 0xB8, 0x08, 0x00,
        0x72, 0x18, 0xB0, 0x00, 0x00, 0x24, 0xB1, 0x10,
        0x04, 0x01, 0x10, 0x0D, 0x04, 0xD1, 0x71, 0xD1,
        0x12, 0xB1, 0x01, 0x00, 0x03, 0x5F, 0xB1, 0x38,
        0x04, 0x01, 0x4E, 0x10, 0x04, 0x60, 0xD5, 0x13,
        0xC3, 0x1C, 0xB1, 0x01, 0x00, 0x1E, 0xD5, 0x13,
        0xC3, 0x19, 0xB8, 0x08, 0x00, 0x1E, 0xD6, 0x13,
        0xC7, 0x19, 0xB8, 0x08, 0x00, 0x1E, 0xD3, 0x2D,
        0x38, 0xB8, 0x08, 0x00, 0x14, 0xD6, 0xB1, 0x12,
        0xD5, 0xB1, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72,
        0x1A, 0xB0, 0x00, 0x00, 0x1E, 0xD3, 0x2D, 0x38,
        0xB8, 0x08, 0x00, 0x14, 0xD9, 0xB1, 0x12, 0xD8,
        0xB1, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x17,
        0xB0, 0x00, 0x00, 0x24, 0xB1, 0x38, 0x04, 0x01,
        0x18, 0x24, 0x04, 0x60, 0xD5, 0x13, 0xC3, 0x16,
        0xD8, 0x1D, 0xD6, 0x13, 0xC7, 0x16, 0xD9, 0x25,
        0xD1, 0x71, 0xD1, 0x13, 0xB2, 0x02, 0x00, 0x01,
        0x14, 0x38, 0x04, 0x59, 0xC3, 0x03, 0x60, 0xD1,
        0x1A, 0xD2, 0x2D, 0xB1, 0x01, 0x00, 0x72, 0x24,
        0xB1, 0x4C, 0x04, 0x01, 0x30, 0x42, 0x04, 0xD2,
        0x2D, 0xB1, 0x01, 0x00, 0x72, 0x71, 0xD1, 0x03,
        0xD2, 0x2D, 0xB2, 0x02, 0x00, 0x72, 0x71, 0xD8,
        0x03, 0xD2, 0x2D, 0xB3, 0x03, 0x00, 0x72, 0x71,
        0xD9, 0x03, 0xD2, 0x2D, 0xB4, 0x04, 0x00, 0x72,
        0x71, 0xD5, 0x03, 0xD2, 0x2D, 0xB5, 0x05, 0x00,
        0x72, 0x71, 0xD6, 0x01, 0x0B, 0x4C, 0x04, 0xD1,
        0x71, 0xB0, 0x00, 0x00, 0x03, 0x5B, 0x01, 0x14,
        0x74, 0x04, 0x60, 0xD2, 0x2D, 0xB1, 0x01, 0x00,
        0x72, 0x16, 0x36, 0xB9, 0x63, 0x00, 0x24, 0xB1,
        0x58, 0x07, 0x01, 0x59, 0xCE, 0x04, 0x63, 0x03,
        0x61, 0x28, 0xD0, 0xCC, 0xC1, 0xD9, 0xC5, 0xD2,
        0xA0, 0xA8, 0xD8, 0xA9, 0xA0, 0xCD, 0xCF, 0xD6,
        0xC5, 0xD3, 0xA0, 0xC6, 0xD2, 0xCF, 0xCD, 0xA0,
        0x29, 0x46, 0xD2, 0x2D, 0xB2, 0x02, 0x00, 0x72,
        0x45, 0x28, 0xAC, 0x29, 0x46, 0xD2, 0x2D, 0xB3,
        0x03, 0x00, 0x72, 0x45, 0x28, 0xA0, 0xD4, 0xCF,
        0xA0, 0x29, 0x46, 0xD2, 0x2D, 0xB4, 0x04, 0x00,
        0x72, 0x45, 0x28, 0xAC, 0x29, 0x46, 0xD2, 0x2D,
        0xB5, 0x05, 0x00, 0x72, 0x47, 0x03, 0xD2, 0x2D,
        0xB1, 0x01, 0x00, 0x72, 0x71, 0x36, 0xB9, 0x63,
        0x00, 0x03, 0x63, 0x01, 0x13, 0xD8, 0x04, 0x60,
        0xD2, 0x2D, 0xB5, 0x05, 0x00, 0x72, 0x17, 0xB1,
        0x01, 0x00, 0x24, 0xB1, 0xE2, 0x04, 0x01, 0x47,
        0xDD, 0x04, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00,
        0x14, 0xD2, 0x2D, 0xB5, 0x05, 0x00, 0x72, 0x12,
        0xD2, 0x2D, 0xB4, 0x04, 0x00, 0x72, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x71, 0x36, 0xB2, 0x02,
        0x00, 0x03, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00,
        0x14, 0xD2, 0x2D, 0xB3, 0x03, 0x00, 0x72, 0x12,
        0xD2, 0x2D, 0xB2, 0x02, 0x00, 0x72, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x71, 0xB0, 0x00, 0x00,
        0x03, 0x5F, 0xB1, 0x8C, 0x05, 0x01, 0x72, 0xE2,
        0x04, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14,
        0xD2, 0x2D, 0xB5, 0x05, 0x00, 0x72, 0x12, 0xD2,
        0x2D, 0xB4, 0x04, 0x00, 0x72, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x71, 0xD3, 0x2D, 0x38, 0xB8,
        0x08, 0x00, 0x14, 0xD2, 0x2D, 0xB3, 0x03, 0x00,
        0x72, 0x12, 0xD2, 0x2D, 0xB2, 0x02, 0x00, 0x72,
        0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x03, 0xD3,
        0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xD2, 0x2D,
        0xB3, 0x03, 0x00, 0x72, 0x12, 0xD2, 0x2D, 0xB2,
        0x02, 0x00, 0x72, 0x72, 0x13, 0xB8, 0x08, 0x00,
        0x72, 0x71, 0xB0, 0x00, 0x00, 0x03, 0x60, 0x31,
        0x3F, 0xD2, 0x2D, 0xB2, 0x02, 0x00, 0x72, 0x13,
        0xD2, 0x2D, 0xB4, 0x04, 0x00, 0x72, 0x72, 0x17,
        0xB2, 0x02, 0x00, 0x24, 0xB1, 0x8C, 0x05, 0x01,
        0x48, 0x32, 0x05, 0xD5, 0xB1, 0x71, 0x38, 0xD2,
        0x2D, 0xB2, 0x02, 0x00, 0x72, 0x12, 0xD2, 0x2D,
        0xB4, 0x04, 0x00, 0x72, 0x72, 0x15, 0xB2, 0x02,
        0x00, 0x03, 0xD6, 0xB1, 0x71, 0x38, 0xD2, 0x2D,
        0xB3, 0x03, 0x00, 0x72, 0x12, 0xD2, 0x2D, 0xB5,
        0x05, 0x00, 0x72, 0x72, 0x15, 0xB2, 0x02, 0x00,
        0x03, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14,
        0xD6, 0xB1, 0x12, 0xD5, 0xB1, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x71, 0xB0, 0x00, 0x00, 0x01,
        0x30, 0x3C, 0x05, 0xD8, 0x71, 0xD2, 0x2D, 0xB4,
        0x04, 0x00, 0x72, 0x03, 0xD9, 0x71, 0xD2, 0x2D,
        0xB5, 0x05, 0x00, 0x72, 0x03, 0x60, 0xD3, 0x2D,
        0x38, 0xB8, 0x08, 0x00, 0x14, 0xD9, 0x12, 0xD8,
        0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x17, 0x36,
        0xB1, 0x01, 0x00, 0x24, 0xB1, 0x46, 0x05, 0x01,
        0x1F, 0x41, 0x05, 0xC2, 0x71, 0x36, 0xB2, 0x02,
        0x00, 0x03, 0x55, 0xC1, 0x56, 0x36, 0xB2, 0x02,
        0x00, 0x57, 0xB2, 0x02, 0x00, 0x58, 0xB4, 0x04,
        0x00, 0x03, 0x5C, 0xB1, 0x5A, 0x05, 0x01, 0x1E,
        0x46, 0x05, 0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08,
        0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x17, 0x36, 0xB2, 0x02, 0x00,
        0x24, 0xB1, 0x50, 0x05, 0x01, 0x2B, 0x4B, 0x05,
        0x55, 0xC1, 0x56, 0x36, 0xB2, 0x02, 0x00, 0x57,
        0xB2, 0x02, 0x00, 0x58, 0xB4, 0x04, 0x00, 0x03,
        0x55, 0xC2, 0x56, 0x36, 0xB2, 0x02, 0x00, 0x57,
        0xB2, 0x02, 0x00, 0x58, 0xB4, 0x04, 0x00, 0x03,
        0x5C, 0xB1, 0x5A, 0x05, 0x03, 0x59, 0xC2, 0x01,
        0x17, 0x50, 0x05, 0x59, 0xC1, 0x03, 0x60, 0xD2,
        0x2D, 0xB1, 0x01, 0x00, 0x72, 0x16, 0x36, 0xB9,
        0x63, 0x00, 0x24, 0xB1, 0x8C, 0x05, 0x01, 0x2F,
        0x55, 0x05, 0x61, 0x28, 0xA0, 0xD4, 0xCF, 0xA0,
        0x29, 0x46, 0xD2, 0x2D, 0xB4, 0x04, 0x00, 0x72,
        0x45, 0x28, 0xAC, 0x29, 0x46, 0xD2, 0x2D, 0xB5,
        0x05, 0x00, 0x72, 0x47, 0x03, 0xD2, 0x2D, 0xB1,
        0x01, 0x00, 0x72, 0x71, 0x36, 0xB9, 0x63, 0x00,
        0x03, 0x5F, 0xB1, 0xD8, 0x04, 0x01, 0x2C, 0x5A,
        0x05, 0xD5, 0x71, 0xD8, 0x12, 0xC1, 0x03, 0xD6,
        0x71, 0xD9, 0x12, 0xC2, 0x03, 0x60, 0xD5, 0x1C,
        0xB1, 0x01, 0x00, 0x1E, 0xD5, 0x19, 0xB8, 0x08,
        0x00, 0x1E, 0xD6, 0x1C, 0xB1, 0x01, 0x00, 0x1E,
        0xD6, 0x19, 0xB8, 0x08, 0x00, 0x24, 0xB1, 0x78,
        0x05, 0x01, 0x4B, 0x64, 0x05, 0xD8, 0xB1, 0x71,
        0xD8, 0x12, 0xC1, 0x15, 0xB2, 0x02, 0x00, 0x03,
        0xD9, 0xB1, 0x71, 0xD9, 0x12, 0xC2, 0x15, 0xB2,
        0x02, 0x00, 0x03, 0x60, 0xD3, 0x2D, 0x38, 0xB8,
        0x08, 0x00, 0x14, 0xD6, 0x12, 0xD5, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x16, 0xB0, 0x00, 0x00,
        0x1D, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14,
        0xD9, 0xB1, 0x12, 0xD8, 0xB1, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x19, 0xB0, 0x00, 0x00, 0x25,
        0x5C, 0xB9, 0x8E, 0x03, 0x01, 0x05, 0x78, 0x05,
        0x5B, 0x01, 0x30, 0x82, 0x05, 0x61, 0x28, 0xCE,
        0xCF, 0xD4, 0xA0, 0xD6, 0xC1, 0xCC, 0xC9, 0xC4,
        0xA0, 0xCD, 0xCF, 0xD6, 0xC5, 0xA0, 0xD0, 0xCC,
        0xC1, 0xD9, 0xC5, 0xD2, 0xA0, 0xA8, 0xCF, 0xA9,
        0xAC, 0xA0, 0xD4, 0xD2, 0xD9, 0xA0, 0xC1, 0xC7,
        0xC1, 0xC9, 0xCE, 0xAE, 0xAE, 0xAE, 0x29, 0x03,
        0x63, 0x01, 0x4E, 0x8C, 0x05, 0x63, 0x03, 0x61,
        0x28, 0xD6, 0x29, 0x03, 0x55, 0xD9, 0x56, 0xB8,
        0x08, 0x00, 0x57, 0xB1, 0x01, 0x00, 0x58, 0x36,
        0xB1, 0x01, 0x00, 0x03, 0x62, 0xD9, 0x47, 0x03,
        0x55, 0xD8, 0x56, 0xB1, 0x01, 0x00, 0x57, 0xB8,
        0x08, 0x00, 0x03, 0x50, 0x38, 0xD8, 0x14, 0xB4,
        0x04, 0x00, 0x72, 0x03, 0x60, 0xD3, 0x2D, 0x38,
        0xB8, 0x08, 0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72,
        0x13, 0xB8, 0x08, 0x00, 0x72, 0x16, 0xB0, 0x00,
        0x00, 0x25, 0x61, 0x28, 0xAE, 0x29, 0x47, 0x01,
        0x1F, 0xBE, 0x05, 0x60, 0xD3, 0x2D, 0x38, 0xB8,
        0x08, 0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x16, 0xB1, 0x01, 0x00,
        0x25, 0x61, 0x28, 0xCF, 0x29, 0x47, 0x01, 0x20,
        0xD2, 0x05, 0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08,
        0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x16, 0x36, 0xB1, 0x01, 0x00,
        0x25, 0x61, 0x28, 0xD8, 0x29, 0x47, 0x01, 0x21,
        0xE6, 0x05, 0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08,
        0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x16, 0x36, 0xB2, 0x02, 0x00,
        0x25, 0x61, 0x28, 0xD8, 0xAA, 0x29, 0x47, 0x01,
        0x20, 0xFA, 0x05, 0x60, 0xD3, 0x2D, 0x38, 0xB8,
        0x08, 0x00, 0x14, 0xD9, 0x12, 0xD8, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x16, 0xB2, 0x02, 0x00,
        0x25, 0x61, 0x28, 0xCF, 0xAA, 0x29, 0x47, 0x01,
        0x30, 0x0E, 0x06, 0x59, 0xD8, 0x03, 0x63, 0x03,
        0x63, 0x03, 0x59, 0xD9, 0x03, 0x55, 0xCA, 0x56,
        0xB1, 0x01, 0x00, 0x57, 0xB8, 0x08, 0x00, 0x03,
        0x50, 0x38, 0xCA, 0x14, 0xB4, 0x04, 0x00, 0x72,
        0x03, 0x62, 0xCA, 0x47, 0x03, 0x59, 0xCA, 0x03,
        0x61, 0x28, 0xA0, 0xC8, 0x29, 0x03, 0x63, 0x01,
        0x4B, 0x10, 0x06, 0x55, 0xCC, 0x56, 0xB1, 0x01,
        0x00, 0x57, 0xB8, 0x08, 0x00, 0x03, 0x55, 0xCD,
        0x56, 0xB1, 0x01, 0x00, 0x57, 0xB8, 0x08, 0x00,
        0x03, 0x60, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00,
        0x14, 0xCD, 0x12, 0xCC, 0x72, 0x13, 0xB8, 0x08,
        0x00, 0x72, 0x16, 0xB1, 0x01, 0x00, 0x1E, 0xD3,
        0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xCD, 0x12,
        0xCC, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x16,
        0xB2, 0x02, 0x00, 0x25, 0xD5, 0xB1, 0x71, 0xB1,
        0x01, 0x00, 0x01, 0x37, 0x16, 0x06, 0x60, 0xD3,
        0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xCD, 0x12,
        0xCC, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x16,
        0x36, 0xB1, 0x01, 0x00, 0x1E, 0xD3, 0x2D, 0x38,
        0xB8, 0x08, 0x00, 0x14, 0xCD, 0x12, 0xCC, 0x72,
        0x13, 0xB8, 0x08, 0x00, 0x72, 0x16, 0x36, 0xB2,
        0x02, 0x00, 0x25, 0xD6, 0xB1, 0x71, 0xB1, 0x01,
        0x00, 0x01, 0x14, 0x18, 0x06, 0x59, 0xCD, 0x5A,
        0xCC, 0x03, 0x60, 0xD5, 0xB1, 0x17, 0xB1, 0x01,
        0x00, 0x24, 0xB1, 0x5D, 0x07, 0x01, 0x0F, 0x1E,
        0x06, 0x60, 0xD6, 0xB1, 0x17, 0xB1, 0x01, 0x00,
        0x24, 0xB1, 0x58, 0x07, 0x01, 0x4B, 0x36, 0x06,
        0xD5, 0xB1, 0x71, 0xB0, 0x00, 0x00, 0x03, 0xD6,
        0xB1, 0x71, 0xB0, 0x00, 0x00, 0x03, 0x53, 0x28,
        0xD0, 0xCC, 0xC1, 0xD9, 0xC5, 0xD2, 0xA0, 0xA8,
        0xCF, 0xA9, 0xA0, 0xC6, 0xD2, 0xCF, 0xCD, 0xA0,
        0x29, 0x27, 0xC5, 0x27, 0xC8, 0x03, 0xD8, 0x71,
        0xC5, 0x03, 0xD9, 0x71, 0xC8, 0x03, 0x60, 0xD3,
        0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xD9, 0x12,
        0xD8, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x1A,
        0xB0, 0x00, 0x00, 0x24, 0xB1, 0x82, 0x05, 0x01,
        0x4F, 0x86, 0x06, 0x53, 0x28, 0xD4, 0xCF, 0xA0,
        0x29, 0x27, 0xC1, 0x27, 0xC2, 0x03, 0xD8, 0x71,
        0xC1, 0x03, 0xD9, 0x71, 0xC2, 0x03, 0x60, 0x38,
        0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xD9,
        0x12, 0xD8, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72,
        0x17, 0xB0, 0x00, 0x00, 0x72, 0x1E, 0x38, 0x31,
        0x3F, 0xC1, 0x13, 0xC5, 0x72, 0x19, 0xB2, 0x02,
        0x00, 0x72, 0x1E, 0x38, 0x31, 0x3F, 0xC1, 0x13,
        0xC5, 0x72, 0x17, 0x31, 0x3F, 0xC2, 0x13, 0xC8,
        0x72, 0x72, 0x24, 0xB1, 0x82, 0x05, 0x01, 0x4A,
        0xD6, 0x06, 0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00,
        0x14, 0xC2, 0x12, 0xC1, 0x72, 0x13, 0xB8, 0x08,
        0x00, 0x72, 0x71, 0xD3, 0x2D, 0x38, 0xB8, 0x08,
        0x00, 0x14, 0xC8, 0x12, 0xC5, 0x72, 0x13, 0xB8,
        0x08, 0x00, 0x72, 0x03, 0xD3, 0x2D, 0x38, 0xB8,
        0x08, 0x00, 0x14, 0xC8, 0x12, 0xC5, 0x72, 0x13,
        0xB8, 0x08, 0x00, 0x72, 0x71, 0xB0, 0x00, 0x00,
        0x03, 0x60, 0x31, 0x3F, 0xC5, 0x13, 0xC1, 0x72,
        0x17, 0xB2, 0x02, 0x00, 0x24, 0xB1, 0x12, 0x07,
        0x01, 0x34, 0x08, 0x07, 0xD8, 0xB1, 0x71, 0x38,
        0xC5, 0x12, 0xC1, 0x72, 0x15, 0xB2, 0x02, 0x00,
        0x03, 0xD9, 0xB1, 0x71, 0x38, 0xC8, 0x12, 0xC2,
        0x72, 0x15, 0xB2, 0x02, 0x00, 0x03, 0xD3, 0x2D,
        0x38, 0xB8, 0x08, 0x00, 0x14, 0xD9, 0xB1, 0x12,
        0xD8, 0xB1, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72,
        0x71, 0xB0, 0x00, 0x00, 0x01, 0x3F, 0x0A, 0x07,
        0x61, 0x28, 0xD4, 0xD9, 0xD0, 0xC5, 0xA0, 0xB0,
        0xAC, 0xB0, 0xA0, 0xC6, 0xCF, 0xD2, 0xA0, 0xC4,
        0xCF, 0xCE, 0xC5, 0xAC, 0xA0, 0x29, 0x47, 0x03,
        0x53, 0x28, 0xCD, 0xD5, 0xCC, 0xD4, 0xC9, 0xAD,
        0xCA, 0xD5, 0xCD, 0xD0, 0xA0, 0xD4, 0xCF, 0xA0,
        0x29, 0x27, 0xD8, 0xB1, 0x27, 0xD9, 0xB1, 0x03,
        0x60, 0xD8, 0xB1, 0x1C, 0xB1, 0x01, 0x00, 0x24,
        0xB1, 0x12, 0x07, 0x01, 0x37, 0x0C, 0x07, 0x60,
        0xD3, 0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xD9,
        0xB1, 0x12, 0xD8, 0xB1, 0x72, 0x13, 0xB8, 0x08,
        0x00, 0x72, 0x17, 0xB0, 0x00, 0x00, 0x1E, 0x31,
        0x3F, 0xD8, 0xB1, 0x13, 0xC1, 0x72, 0x17, 0xB2,
        0x02, 0x00, 0x1E, 0x31, 0x3F, 0xD9, 0xB1, 0x13,
        0xC2, 0x72, 0x17, 0xB2, 0x02, 0x00, 0x24, 0xB1,
        0x0A, 0x07, 0x01, 0x1A, 0x0E, 0x07, 0xC5, 0x71,
        0xC1, 0x03, 0xC8, 0x71, 0xC2, 0x03, 0xC1, 0x71,
        0xD8, 0xB1, 0x03, 0xC2, 0x71, 0xD9, 0xB1, 0x03,
        0x5F, 0xB1, 0xD6, 0x06, 0x01, 0x1F, 0x12, 0x07,
        0x60, 0xC2, 0x16, 0xB8, 0x08, 0x00, 0x25, 0xD3,
        0x2D, 0x38, 0xB8, 0x08, 0x00, 0x14, 0xC2, 0x12,
        0xC1, 0x72, 0x13, 0xB8, 0x08, 0x00, 0x72, 0x71,
        0xB2, 0x02, 0x00, 0x01, 0x08, 0x26, 0x07, 0x5F,
        0xB1, 0x0A, 0x00, 0x01, 0x13, 0x58, 0x07, 0x63,
        0x03, 0x61, 0x28, 0xD9, 0xCF, 0xD5, 0xA0, 0xD7,
        0xC9, 0xCE, 0xAE, 0x29, 0x03, 0x51, 0x01, 0x11,
        0x5D, 0x07, 0x63, 0x03, 0x61, 0x28, 0xC9, 0xA0,
        0xD7, 0xC9, 0xCE, 0xAE, 0x29, 0x03, 0x51, 0x01
    ]]
};

module.exports = tape;
