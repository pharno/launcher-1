
export default class Steam {
    constructor(options){
        this.options = options;
    }


    scan_for_next_token(data,position){
        while (true){
            var character = data.charAt(position);

            if ([" ","\n","\t"].indexOf(character) == -1){
                return [character, position]
            } else {
                position += 1;
            }
        }
    }

    parseQuotedToken(data, position){
        let ret = "";
        while(true){
            let gotchar = data.charAt(position);
            if (gotchar == '"'){
                return [ret, position + 1]
            } else {
                ret = ret + gotchar;
                position += 1;
            }
        }
    }

    parseAcfNode(data, position){
        let nodes = {};

        while (true){
            let ret = this.scan_for_next_token(data,position);
            let tokentype = ret[0];
            position = ret[1];
            if (tokentype == "") {
                break;
            }

            if (tokentype == "}") {
                    return [nodes, position];
            }

            if (tokentype != '"') {
                throw "Error parsing ACF format - missing node name at " + position;
            }

            let retQuoted = this.parseQuotedToken(data, position+1);
            let name = retQuoted[0];
            position = retQuoted[1];

            ret = this.scan_for_next_token(data,position);
            tokentype = ret[0];
            position = ret[1];


            if (tokentype == '"'){
                let parseret = this.parseQuotedToken(data, position+1)
                nodes[name] = parseret[0];
                position = parseret[1];
            }
            else if (tokentype == '{'){
                var parseRet = this.parseAcfNode(data, position +1);

                nodes[name] = parseRet[0];
                position = parseRet[1];
            } else if (tokentype == '}'){
                    return [nodes, position];

            } else{
                throw "I dont know, at "+ position
            }

        }
        return [nodes, position];


    }

    parseAcf(data){
        let position = 0;

        let parsed = this.parseAcfNode(data, position);
        return parsed[0];
    }
}