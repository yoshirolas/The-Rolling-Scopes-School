const LEVELS = [
["00000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000o0000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000o0o000000000000000000000000000x!!!!!!!!!!x00",
"000000000000000000000000000000000000000000000000000000000000000000x!xxxxxxxxxx00",
"000000000000000000000000000000000000000000000000000xx000000xx0000xx!xx0000000x00",
"000000000000000000000000000000000000000000000xx000000000000000000x!!!x0000000x00",
"00000000000000000000000000000000000xxxxx00o0o00000000000000000000xx!xx0000000x00",
"000000000000000000000000000000000000000000000000000000000000000000xvx00000000x00",
"00xx0000000000000000000000000000000000000000000000000000000000000000000000000x00",
"00x0000000000000000000000000000000000000000000000000000000000000000000000o000x00",
"00x000000000000000000000o0000000000000000xxxxx0000000000000000000000000000000x00",
"00x00000000000000000000000000000000000000000000000000000000000000000000000000x00",
"00x0000000000xxxx0000000o0000000000000000000000000000000000000000000000000000x00",
"00x00@0000000x00x000000000000000000000000000000000000000000000000xxxxx0000000x00",
"00xxxxxxxxxxxx00xxxxxxxxxxxxxxx000xxxxxxxxxxxxxxxxxxxx00000xxxxxxx000xxxxxxxxx00",
"000000000000000000000000000000x000x000000000000000000x00000x00000000000000000000",
"000000000000000000000000000000x!!!x000000000000000000x!!!!!x00000000000000000000",
"000000000000000000000000000000x!!!x000000000000000000x!!!!!x00000000000000000000",
"000000000000000000000000000000xxxxx000000000000000000xxxxxxx00000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000"],

["0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x!x00",
"00000000000000000000000000000000000000x!!x000000000000000000000000xxxxxxx000000000000000000000000000000000000x!x00",
"00000000000000000000000000000000000000x!!x000000000000000000000xxxx00000xxxx000000000000000000000000000000000x!x00",
"00000000000000000000000000000000000000x!!xxxxxxxxxx00000000000xx00000000000xx0000000000000000o000o000o000o000x!x00",
"00000000000000000000000000000000000000xx!!!!!!!!!!xx000000000xx0000000000000xx0000000000000000000000000000000x!x00",
"000000000000000000000000000000000000000xxxxxxxxxx!!x000000000x00000000000000000000000000000000000000000000000x!x00",
"000000000000000000000000000000000000000000000000xx!x000000000x00000o000o000000000000000000000000000000000000xx!x00",
"0000000000000000000000000000000000000000000000000x!x000000000x00000000000000000000000000xxxxxxxxxxxxxxxxxxxxx!!x00",
"0000000000000000000000000000000000000000000000000xvx000000000x00000x000x0000000000000000x!!!!!!!!!!!!!!!!!!!!!xx00",
"0000000000000000000000000000000000000000000000000000000000000xx00|000|000|00xx000000000xx!xxxxxxxxxxxxxxxxxxxxx000",
"00000000000000000000000000000000000000000000000000000000000000xx!!!!!!!!!!!xx000000000000v000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000xxxx!!!!!xxxx00000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000x00000x000000000000xxxxxxx00000000xxx000000000xxx000000000000000000",
"00000000000000000000000000000000000000000000000x00000x000000000000000000000000000x0x000000000x0x000000000000000000",
"00000000000000000000000000000000000000000000000x00000x00000000000000000000000000000x000000000x00000000000000000000",
"00000000000000000000000000000000000000000000000x00000x000000000000000000000000o0000xx00000000x00000000000000000000",
"00000000000000000000000000000000000000000000000xx0000x0000000o000000000000000000000x000000000x00000000000000000000",
"00000000000000000000000000000000000000000000000x00000x0000000000000000000x000000000x000000000x00000000000000000000",
"000000000000000xxxxxxx00000000xxx000xxx00000000x00000x0000000000000000000x000000000x000000000x00000000000000000000",
"00000000000000xx00000xx000000000x000x0000000000x00000x00000xxxxxx0000x000x000xxxxxxxxx0000000x00000000000000000000",
"0000000000000xx0000000xx00000000x0o0x0000000000x0000xx000000000000000x000x000x000000000000000x00000000000000000000",
"00000@0000000x000000000x00000000x000x0000000000x00000x00000000000000ox000xxxxx000000000000000x00000000000000000000",
"0000xxx000000x000000000x00000000x000x0000000000x00000x0000000000000xxx00000000000000000000000x00000000000000000000",
"0000x0x000000x000000000x0000000xx0o0xx000000000x00000x000000000000000x00000o00000xxxxxx000000x00000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!!xx00000xx!!!!!!!!xx0000x!!!!!!!!!!!!!!!x00000000000x0x00000o000x00000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!xx0000000xxxxxxxxxx00000x!!!!!!!xxxxxxxxx00000=00000x0xx0000000xx00000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!x00000000000000000000000xx!!!!!!xx000000xxxxxxxxxxxxx00xx00000xx000000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!x0000o00000000000000000xx!!!!!!xx00000000000000000000000xxxxxxx0000000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!x000000000000000000000xx!!!!!!xx00000000000000000000000000000000000000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!xx0000000xxxxxxxxxxxxxx!!!!!!xx000000000000000000000000000000000000000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx0000000000000000000000000000000000000000000000000000000",
"!!!!x0x!!!!!!x000000000x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx00000000000000000000000000000000000000000000000000000000"],

["00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000o000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000xxx000000000000000000000000000000000xxx00000000000000000000000000000000",
"000000000000000000000000000000000000000x0x00000000000000000!!!0000=000!!!0000000000000000000000000000000000000",
"000000000000000000000000000000000000000x0x00000000000000000!x!0o0oo0o0!x!0000000000000000000000000000000000000",
"0000000000000000000000000000000000000xxx0xxx0000000000000000x0000000000x00000000000000000000000000000000000000",
"00000000000000000000000000000000000000x000x00000000000000000x0000000000x0000000xxx0000000000000000000000000000",
"00000000000000000000000000000000000000x000x00000000000000000x0000000000x000000x!!!x000000000000000000000000000",
"00000000000000000000000000000000000000x000x00000000000000000xxxxxxxxxxxx0000000xxx0000000000000000000000000000",
"0000000000000000000000000000000000000xx000xx0000000000x000000x000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000x000x000000x0000xxxxxxxx00000000000000x00x000000000000000000000000000000",
"00000000000000000000000000000000000000x000xxxxxxxx0000x00000000000000000000x!!!!x00000000000000000000000000000",
"00000000000000000000000000000000000000x000x00000000000x000000000000000000000xxxx000000000000000000000000000000",
"0000000000000000000000000000000000000xx000xxx000000000x0000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000x000x=0=0=0=0000x000000000000xxx0000000000000000000o00000000000000000000",
"00000000000000000000000000000000000000x000x00000000000x00000000000x!!!x000000000000000000000000000000000000000",
"00000000000000000000000000000000000000x000x0000=0=0=0=x00000o000000xxx0000000xxx000000000000000000000000000000",
"000000000000000000000000000000o000o00xx000xxx000000000x000000000000000000000x!!!x00000000000000000000000000000",
"00000000000000000000000000000000000000x000x00o00000000x00000x0000000000000000xxv000000000xx0000000000000000000",
"00000000000000000000000000000000000000x000x00000000o00x00000000000000x000000000000000000x!!x000000000000000000",
"00000000000000000000000000000xxx0xx000xxxxx00000000000x!!!!!!!!!!!!!!x0000000000000000000vx00000000000000xxx00",
"00000000000000000000000000000x0xxx000xxxxxx00000000000x!!!!!!!!!!!!!!x00000000000000000000000000000000000x0x00",
"00000000000000000000000000000x000000000000x0000xxxxxxxxxxxxxxxxxxxxxxx0000000000000000000000000000000000000x00",
"00000000000000000000000000000xx00000000000xx00000000000000000000000000000000000000000xxx0000000000000000000x00",
"00xxx0000000000000000000000000x00000000000x0000000|000000000000000000000000000000000x!!!x000000000000000000x00",
"00x0x0000000000000000000000000x00000x00000x00000000000000000000o0|0000000000000000000xxx0000000000000000000x00",
"00x000000000000000000000000000x0000xxx0000xxxxxxx000000000000000000000000xxxxx00000000000000000000000000000x00",
"00x000000000000000000000000000x0000xxx0000x000000000000000000000000000000x000x00000000000000000000000000000x00",
"00x000000000000000000000000000xx0000000000x0o0000000000000000000000000000x0x0x00000000000000000000000000000x00",
"00x000000000000000000000000000000000000000x00000000xxxx|00000xxxx000000xxx0xxx00000000000000000000000000000x00",
"00x0000000000000000xxx0000000000000o0o0000x000000000000000000000000000000x000000000xxx000000000000000000000x00",
"00x000000000000000xxxxx0000000000000000000x00000o000000000o000000000o000xxx0000000x!!!x0000000000x000000000x00",
"00x000000000000000oxxxo0000000xx000xxx0000x00000000000000000|00000000000x0x00000000xxx0000000000xxx00000000x00",
"00x0000000000000000xxx00000000xxxxxxxxxxxxx00x0000x0000x0000x0000x00000xx0xx00000000000000000000xxx00000000x00",
"00x000000@0000000000x000000000x00000000000x!!x0000x!!!!x0000x!!!!x0000xx000xx00000000000000000000x000000000x00",
"00xxxxxxxxxxxxxxxxxxxxxxxxxxxxx00000000000xxxxxxxxxxxxxxxxxxxxxxxxxxxxx00000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx00",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],

["00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x00000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000xxxxx0000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x0000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000xxxxx0000000",
"0000000000000000000000000000000000000000000000000000000000000000000000o0000000o0000000o00000000000x00000000000",
"00000000000000000000000000o00000000000000000000000000000000000000000000000000000000000000000000000xxxxx0000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x0000000",
"0000000000000000000xxx00000000000000000000000000000000000000000000xxxxxx0xxxxxx00xxxxx000x000x0o0x0xxxx0000000",
"0000000!00o00!0000000000000000000000000000000000000000000000000000x0000x0x0000000x000000x0x00xx0xx0x0000000000",
"0000000x00000x0000000000000000000000000000000000000000000000000000x0000x0x0000000x00000x000x0x0x0x0x0000000000",
"0000000x=0o00x000000000000x00000000000000000000000000000000o00xxx0xxxxxx0xxxxxx00x00xx0xxxxx0x0x0x0xxxx0000000",
"0000000x00000x0000000000000000000000000000000000000000000000000000x00x00000000x00x000x0x000x0x000x0x0000000000",
"0000000!00o00!000000000000o000000000000000000000000000000000000000x000x0000000x00x000x0x000x0x000x0x0000000000",
"0000000|0000000000000000000000000000000000000000000000000000000000x0000x0xxxxxx00xxxxx0x000x0x000x0xxxx0000000",
"0000000000o00000000000000xxx000000000000000000000000000000xx00000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000o00000000000000000000000000",
"00000000000000000000000000o00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000xx000000000000000000000000000000000000000000000000000000",
"00x0000000000000000xxx0000|0000xxx0000000000000000000000000000000000000000000000000000000000000000000000000000",
"00x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00x00000000000000000000000o00000000000000000000000000000000000000000000000000000x000000x0000000000000000000000",
"00x0000000000000000000000000000000000000000000000000000000xx00000xx0000000000000000000000000000000000000000000",
"00x000000000xxxx000000000xxx000000000xxx000000000000000000000000000000000x000000000000000000x00000000000000000",
"00x00000x000x0o00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00x!!!!!xx00x0000000000000000000000000000000000000000000000000000||0000000000000000000000000000000000000000000",
"00xxxxxxx000x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00x000000000xx00xxxxxxxxx0o0xxxxxxxxx0o0xx000000000000000000000000000000000000000000000000x0000000000000000000",
"00x0000000000x00x0000000x000x0000000x000x00000000000000000||000000000000000000x00000x0000000000000000000000000",
"00x00@0000000xxxx000o000xxxxx000o000xxxxx000000000000000000000000000000000000000000000000000000000000000000000",
"00xxxxxxx0000000000000000000000000000000000000xxxxx0000000xx00000xx00000xxx00000000000000000000000000000000000",
"00000000x0000000000000000000000000000000000000x000x000000000000000000000xxx00000000000000000000000000000000000",
"00000000x=0000000000000000000=000000000000000=x000x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"00000000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]
];

export {LEVELS} ;