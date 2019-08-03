import React from 'react';

const ShowData = props => {
    const { arrItems } = props;
    
    if (arrItems.length < 2) return <div className="black-30 tc w-100">Enter the urls to get data: ...</div>;

    return <div className="w-100">
        {/* Hình chính */}
        <div className="w-90 center flex flex-wrap mt1 pb1 bb b--black-10">
            <div className="w-100 w-100-m w-20-l"></div>
            <div className="w-50 w-50-m w-40-l tc br b--black-20 pa2">
                <p className="pv3 f4 fw3 black-40">
                    {arrItems[0] ? arrItems[0].name : ''}
                </p>
                <img src={arrItems[0] ? arrItems[0].mainImage : ''} alt="" className="" />
            </div>
            <div className="w-50 w-50-m w-40-l tc pa2">
                <p className="pv3 f4 fw3 black-40">
                    {arrItems[1] ? arrItems[1].name : ''}
                </p>
                <img src={arrItems[1] ? arrItems[1].mainImage : ''} alt="" className="" />
            </div>
        </div>

        {/* Liệt kê hình khác */}
        <div className="w-90 center flex flex-wrap mt1 pb1 bb b--black-10">
            <div className="w-100 w-100-m w-20-l bg-black-10 pa2 black-70 fw6 f5 ttu">
                Hình khác
          </div>
            {/* sản phẩm 1 */}
            <div className="w-50 w-50-m w-40-l br b--black-20 flex flex-wrap pa2 justify-start justify-center-l">
                {
                    arrItems[0].smallImages.map((item, i) => <img key={i} src={item.link} alt="" className="h3 mr2 ba pa2 b--black-40 br2 pointer mt1" />)
                    /* dùng item.id thay i */
                }
            </div>
            <div className="w-50 w-50-m w-40-l flex pa2 flex-wrap justify-start justify-center-l">
                {
                    arrItems[1].smallImages.map((item, i) => <img key={i} src={item.link} alt="" className="h3 mr2 ba pa2 b--black-40 br2 pointer mt1" />)
                    /* dùng item.id thay i */
                }
            </div>
        </div>

        {/* So sánh giá */}
        <div className="w-90 center flex flex-wrap mt1 pb1 bb b--black-10">
            <div className="w-100 w-100-m w-20-l bg-black-10 pa2 black-70 fw6 f5 ttu">
                Giá gốc - Khuyến mãi
          </div>
            {/* sản phẩm 1 */}
            <div className="w-50 w-50-m w-40-l br b--black-20 flex pa2">
                <div className="w-100 tc">
                    <span className="gray strike f5 fw5 div v-mid">{arrItems[0].price}</span>
                    <span className="red f2 fw5 div v-mid">{arrItems[0].promoPrice}</span>
                </div>
            </div>
            <div className="w-50 w-50-m w-40-l flex pa2">
                <div className="w-100 tc">
                    <span className="gray strike f5 fw5 div v-mid">{arrItems[1].price}</span>
                    <span className="red f2 fw5 div v-mid">{arrItems[1].promoPrice}</span>
                </div>
            </div>
        </div>

        {/* So sánh đánh gía */}
        <div className="w-90 center flex flex-wrap mt1 pb1 bb b--black-10">
            <div className="w-100 w-100-m w-20-l bg-black-10 pa2 black-70 fw6 f5 ttu">
                Đánh giá
          </div>
            {/* sản phẩm 1 */}
            <div className="w-50 w-50-m w-40-l br b--black-20 flex pa2">
                <div className="w-100 tc">
                    <span className="f3 fw5 v-mid red">{arrItems[0].rate}</span>
                    <span className="f3 fw5 v-mid gray">/ 5</span>
                </div>
            </div>
            <div className="w-50 w-50-m w-40-l flex pa2">
                <div className="w-100 tc">
                    <span className="f3 fw5 v-mid red">{arrItems[1].rate}</span>
                    <span className="f3 fw5 v-mid gray">/ 5</span>
                </div>
            </div>
        </div>

        {/* So sánh Mô tả */}
        <div className="w-90 center flex flex-wrap mt1 pb1 bb b--black-10">
            <div className="w-100 w-100-m w-20-l bg-black-10 pa2 black-70 fw6 f5 ttu">
                Mô tả
          </div>
            {/* sản phẩm 1 */}
            <div className="w-50 w-50-m w-40-l br b--black-20 flex pa2">
                <div className="w-100 lh-copy black-60 f6 tl" 
                    dangerouslySetInnerHTML={{ __html: arrItems[0].description }}/>

            </div>
            <div className="w-50 w-50-m w-40-l flex pa2">
                <div className="w-100 lh-copy black-60 f6 tl" 
                    dangerouslySetInnerHTML={{ __html: arrItems[1].description }}/>
            </div>
        </div>

        {/* So sánh Mô tả */}
        <div className="w-90 center flex flex-wrap mt1 pb1 bb b--black-10">
            <div className="w-100 w-100-m w-20-l bg-black-10 pa2 black-70 fw6 f5 ttu">
                Link AFF
          </div>
            {/* sản phẩm 1 */}
            <div className="w-50 w-50-m w-40-l br b--black-20 ph2 pv3 tc">
                <a  href={arrItems[0].link} rel="noopener noreferrer" target="_blank" 
                    className="link dib pointer dim ph3 pv2 br2 bg-blue white">Tới nơi bán</a>
            </div>
            <div className="w-50 w-50-m w-40-l tc ph2 pv3">
                <a  href={arrItems[1].link} rel="noopener noreferrer" target="_blank" 
                    className="link dib pointer dim ph3 pv2 br2 bg-blue white">Tới nơi bán</a>
            </div>
        </div>
    </div>
}

export default ShowData;