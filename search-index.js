var searchIndex = {};
searchIndex['data_encoding'] = {"items":[[0,"base","data_encoding","Generic base module.",null,null],[3,"Opt","data_encoding::base","Optimized implementation.",null,null],[12,"val","","Symbol to value association.",0,null],[12,"sym","","Value to symbol association.",0,null],[12,"bit","","The power of two of the base.",0,null],[12,"pad","","The padding.",0,null],[12,"_phantom","","",0,null],[3,"Spec","","Specification implementation.",null,null],[12,"val","","Symbol to value association.",1,null],[12,"pad","","The padding.",1,null],[4,"ValidError","","Validity errors.",null,null],[13,"BadBit","","The base must be a power of two between 2 and 64\ninclusive.",2,null],[13,"PadNotAscii","","The padding must be an ascii.",2,null],[13,"PadSymbol","","The padding must not be a symbol.",2,null],[13,"SymNotAscii","","Symbols must be ascii.",2,null],[13,"NotValue","","Symbols must be mapped to values.",2,null],[13,"NotInj","","Symbols must be uniquely mapped.",2,null],[13,"NotSurj","","Symbols must be mapped to all values.",2,null],[4,"EqualError","","Equality errors.",null,null],[13,"Symbol","","The two bases differ on a symbol or its associated value.",3,null],[13,"Padding","","The two bases differ on the padding.",3,null],[5,"mask","","Returns the bit-mask of a base.",null,{"inputs":[{"name":"b"}],"output":{"name":"u8"}}],[5,"len","","Returns the period length of a base.",null,{"inputs":[{"name":"b"}],"output":{"name":"usize"}}],[5,"enc","","Returns the encoding length of a base.",null,{"inputs":[{"name":"b"}],"output":{"name":"usize"}}],[5,"dec","","Returns the decoding length of a base.",null,{"inputs":[{"name":"b"}],"output":{"name":"usize"}}],[5,"valid","","Checks whether a base is valid.",null,{"inputs":[{"name":"b"}],"output":{"name":"result"}}],[5,"equal","","Checks whether two bases are equal.",null,{"inputs":[{"name":"b1"},{"name":"b2"}],"output":{"name":"result"}}],[8,"Base","","Generic interface.",null,null],[10,"pad","","Returns the padding.",4,{"inputs":[{"name":"base"}],"output":{"name":"u8"}}],[10,"val","","Returns the value of a symbol.",4,{"inputs":[{"name":"base"},{"name":"u8"}],"output":{"name":"option"}}],[11,"bit","","Returns the power of two of the base.",4,{"inputs":[{"name":"base"}],"output":{"name":"usize"}}],[11,"sym","","Returns the symbol of a value.",4,{"inputs":[{"name":"base"},{"name":"u8"}],"output":{"name":"u8"}}],[11,"bit","","",0,{"inputs":[{"name":"opt"}],"output":{"name":"usize"}}],[11,"pad","","",0,{"inputs":[{"name":"opt"}],"output":{"name":"u8"}}],[11,"val","","",0,{"inputs":[{"name":"opt"},{"name":"u8"}],"output":{"name":"option"}}],[11,"sym","","",0,{"inputs":[{"name":"opt"},{"name":"u8"}],"output":{"name":"u8"}}],[11,"pad","","",1,{"inputs":[{"name":"spec"}],"output":{"name":"u8"}}],[11,"val","","",1,{"inputs":[{"name":"spec"},{"name":"u8"}],"output":{"name":"option"}}],[11,"eq","","",2,{"inputs":[{"name":"validerror"},{"name":"validerror"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"validerror"},{"name":"validerror"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"validerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"validerror"}],"output":{"name":"validerror"}}],[11,"fmt","","",2,{"inputs":[{"name":"validerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"validerror"}],"output":{"name":"str"}}],[11,"eq","","",3,{"inputs":[{"name":"equalerror"},{"name":"equalerror"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"equalerror"},{"name":"equalerror"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"equalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"equalerror"}],"output":{"name":"equalerror"}}],[11,"fmt","","",3,{"inputs":[{"name":"equalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"equalerror"}],"output":{"name":"str"}}],[0,"encode","data_encoding","Generic encoding module.",null,null],[5,"encode_len","data_encoding::encode","Converts an input length to its output length.",null,{"inputs":[{"name":"b"},{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","Generic encoding function without allocation.",null,null],[5,"encode","","Generic encoding function with allocation.",null,null],[0,"decode","data_encoding","Generic decoding module.",null,null],[4,"Error","data_encoding::decode","Decoding errors.",null,null],[13,"BadLength","","Bad input length.",5,null],[13,"BadCharacter","","Bad input character.",5,null],[13,"BadPadding","","Bad padding.",5,null],[5,"decode_len","","Converts an input length to its output length.",null,{"inputs":[{"name":"b"},{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_mut","","Generic decoding function without allocation.",null,null],[5,"decode","","Generic decoding function with allocation.",null,null],[11,"eq","","",5,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"shift","","Increments error position.",5,{"inputs":[{"name":"error"},{"name":"usize"}],"output":{"name":"error"}}],[11,"map","","Maps error position.",5,{"inputs":[{"name":"error"},{"name":"f"}],"output":{"name":"error"}}],[11,"fmt","","",5,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[0,"base2","data_encoding","Base 2 Encoding.",null,null],[4,"Static","data_encoding::base2","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base4","data_encoding","Base 4 Encoding.",null,null],[4,"Static","data_encoding::base4","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base8","data_encoding","Base 8 Encoding.",null,null],[4,"Static","data_encoding::base8","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base16","data_encoding","Base 16 Encoding.",null,null],[4,"Static","data_encoding::base16","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base32","data_encoding","Base 32 Encoding.",null,null],[4,"Static","data_encoding::base32","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base32hex","data_encoding","Base 32 Encoding with Extended Hex Alphabet.",null,null],[4,"Static","data_encoding::base32hex","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base64","data_encoding","Base 64 Encoding.",null,null],[4,"Static","data_encoding::base64","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null],[0,"base64url","data_encoding","Base 64 Encoding with URL and Filename Safe Alphabet.",null,null],[4,"Static","data_encoding::base64url","Force static dispatch.",null,null],[5,"base","","Gives access to the base.",null,{"inputs":[],"output":{"name":"opt"}}],[5,"encode_len","","See the generic [`encode_len`](../encode/fn.encode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"decode_len","","See the generic [`decode_len`](../decode/fn.decode_len.html) function for details.",null,{"inputs":[{"name":"usize"}],"output":{"name":"usize"}}],[5,"encode_mut","","See the generic [`encode_mut`](../encode/fn.encode_mut.html) function for details.",null,null],[5,"decode_mut","","See the generic [`decode_mut`](../decode/fn.decode_mut.html) function for details.",null,null],[5,"encode","","See the generic [`encode`](../encode/fn.encode.html) function for details.",null,null],[5,"decode","","See the generic [`decode`](../decode/fn.decode.html) function for details.",null,null]],"paths":[[3,"Opt"],[3,"Spec"],[4,"ValidError"],[4,"EqualError"],[8,"Base"],[4,"Error"]]};
initSearch(searchIndex);
