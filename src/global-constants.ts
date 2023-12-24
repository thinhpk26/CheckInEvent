export const getGlobalConstant = function (key: string) {
    const keyArr = key.split(".");
    let value = keyArr.length > 0 && globalConstant.hasOwnProperty(key) ? globalConstant[keyArr[0]] : null;
    if(value && keyArr.length > 1) {
        for(let i=1; i<keyArr.length; i++) {
            if(value instanceof Object && value.hasOwnProperty(key)) {
                value = value[key];
            }
        }
    }
    return value;
};

export const globalConstant : any = {
    hostname: "http://103.67.163.154",
    port: 3000,
    tokenLocalName: "token"
}
