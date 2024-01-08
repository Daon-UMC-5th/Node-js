require("dotenv").config();

const port = process.env.PORT || 3000,
	express = require("express"),
	app = express();
const userRouter  = require("./routes/userRoute.js");
const expressSession = require("express-session");
app.use(express.static("public"));

app.use(expressSession({
	secret: "secret_password",
	cookie:{
		maxAge:4000000
	},
	resave:false,
	saveUninitialized:true
}));

// 라우터 이름 예시
//app.use("/user", userRouter);

app.listen(port);
console.log("Running on the port number:" + port);




