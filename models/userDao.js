const bcrypt = require('../middleware/bcrypt');
const appDataSource = require('./dataSource');
const createUser =  async ( email, password) => {
	const cryptedPassword =  await bcrypt.makeHash(password, 12);
	try {
		return appDataSource.query(
		`INSERT INTO users(
			email,
			password
		) VALUES (?, ?)
		`,
		[ email, cryptedPassword ]
	  );
	} catch (err) {
		const error = new Error('INVALID_DATA_INPUT');
		error.statusCode = 500;
		throw error;
	}
};

const login = async (email)=>{
	try{
		return appDataSource.query(
			`
			SELECT users.password, id
			FROM users 
			WHERE users.email = "${email}"
			`
		)
	}catch(err){
		const error = new Error("LOGIN_FAILED");
		error.statusCode = 400;
		throw error;
	}
}

module.exports = {
  createUser, login
}