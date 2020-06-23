import randomstring from 'randomstring';


export const generateString = (size) => {
	return randomstring.generate(size);
}