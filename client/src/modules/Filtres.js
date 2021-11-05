export default {
    uppercase: (value) => {
        if (!value) return '';
        return value.toString().toUpperCase();
    },
    lowercase: (value) => {
        if (!value) return '';
        return value.toString().toLowerCase();
    },
    capitalize: (value) => {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    },
    titlecase: (value) => {
        if (!value) return '';
        let str = '';
        const words = value.split(' ');
        
        words.forEach((val, index) => {
            str = str.concat(val.charAt(0).toUpperCase() + val.slice(1));
            str = str.concat(index !== words.lenght - 1 ? ' ' : '');
        });
        return str;
    }
}