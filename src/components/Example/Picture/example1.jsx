/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:42
 */

'use strict';
import React from 'react';
import Picture from 'blank-ui/lib/Picture';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
        let style = {
            width: '31%',
            height: 150,
            margin: '1%',
            float: 'left'
        }
        let data = [
            'http://chenjingwei4518.github.io/react-gallery/assets/09f909486547bc30a51c4ed67368b301.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/09f909486547bc30a51c4ed67368b301.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/09f909486547bc30a51c4ed67368b301.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/41aca7f1b20ccb089e7ba17408cd90ad.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/41aca7f1b20ccb089e7ba17408cd90ad.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/41aca7f1b20ccb089e7ba17408cd90ad.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/9b3ccb04d8bc3e74946da861f640e64f.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/9b3ccb04d8bc3e74946da861f640e64f.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/9b3ccb04d8bc3e74946da861f640e64f.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/5f823ad5fbaeac5ae607dec371e84f54.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/9463cd689532c47cfd6228e393cb1236.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/c3669675c5f49068071ae4def783b1c6.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/0273ff79aa74dae207d2db75234d83cb.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/d17b793c524f5778af73927ab5b6d329.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/416fe7476ac41777d0e38e37eac83100.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/8b3bfa869a59fbe7f06f7ba9747df02b.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/ce61f86beea5259482a3cac9fcbecd5a.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/74e22963f85772c188e0fbfc43d0172f.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/7ca7d6ce006c352c1b7e2299689b1762.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/e36136b744bb81bef9d0e1db9f6c27dd.jpg',
            'http://chenjingwei4518.github.io/react-gallery/assets/156230abae4c136c279dd6dee8f37c69.jpg',
        ];
        let myLoading = (
            <div style={{
                    background: '#ddd',
                    color: '#fff',
                    textAlign: 'center',
                    lineHeight: '150px'
                }}
            >
                <i className="fa fa-2x fa-circle-o-notch fa-spin"></i>
            </div>
        );
        return (
            <div style={{overflow: 'hidden'}}>
                {data.map((url,i)=>{
                    return (
                        <div key={i} style={style} >
                            <Picture 
                                src={url} 
                                holderLoading={myLoading}
                            />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export const title = "Lazyload Img";
export const code = 'import React from \'react\';\nimport Picture from \'blank-ui/lib/Picture\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n    render() {\n        let style = {\n            width: \'31%\',\n            height: 150,\n            margin: \'1%\',\n            float: \'left\'\n        }\n        let data = [\n            //...data\n        ];\n        let myLoading = (\n            <div style={{\n                    background: \'#ddd\',\n                    color: \'#fff\',\n                    textAlign: \'center\',\n                    lineHeight: \'150px\'\n                }}\n            >\n                <i className=\"fa fa-2x fa-circle-o-notch fa-spin\"></i>\n            </div>\n        );\n        return (\n            <div style={{overflow: \'hidden\'}}>\n                {data.map((url,i)=>{\n                    return (\n                        <div key={i} style={style} >\n                            <Picture \n                                src={url} \n                                holderLoading={myLoading}\n                            />\n                        </div>\n                    )\n                })}\n            </div>\n        );\n    }\n}';
