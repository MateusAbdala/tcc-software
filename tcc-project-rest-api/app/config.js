export default {

    mongo: {
     	default: {
    		port: 27017
    	},
    	development: {
				db: 'tccProjectdev',
				host: 'localhost'
    	},
    	production: {
				db: 'tccProject',
				host: 'localhost'
    	}
    }

}