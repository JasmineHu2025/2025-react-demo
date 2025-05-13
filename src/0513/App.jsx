import { useEffect } from "react";

import $ from 'jquery';
import './App.css';

function App() {

    useEffect(() => {
        // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)
        // 尋找指定的名稱 => has()
        // 新增html元素 => append()
        // 取得子元素 => children()

        // 當滑鼠碰到超連結時，檢查「has()」是否有ttpShow類別
        $('a:has(.ttpShow)')
            .on('mouseover', function (e) {
                // 動態增加「append()」一個div區域在body標籤中
                // 取得超連結指定的元素「children()」中的html內容「html()」
                $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
                $('#ttpPanel').css({
                    top:(e.pageY+10)+'px',
                    left:(e.pageX+10)+'px'
                }).fadeIn('500');
            })
            .on('mouseout',function(){
                $('#ttpPanel').remove();
            })
            .on('mousemove',function(e){
                $('#ttpPanel').css({
                    top:(e.pageY+10)+'px',
                    left:(e.pageX+10)+'px'
                });
            })
    }, [])

    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem, ipsum dolor sit amet
                <a href="#">
                    consectetur
                    <span className="ttpShow">consectetur內容說明...</span>
                </a>
                consectetur adipisicing elit. Inventore, quasi omnis iusto  
                <a href="#">
                    earecusandaequam
                    <span className="ttpShow">
                        <img src="./img0429/2.jpg" alt="" style={{width:'100px'}} />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </span>
                </a>
                 dolorem nulla eius provident, temporibus possimus? Quae, doloribus iusto. Libero sunt consequuntur id ea fugiat repellat quasi deserunt inventore veritatis temporibus dolores ex voluptatibus eos, consequatur assumenda facilis accusamus dicta! Enim nostrum cumque sapiente ullam minima voluptatibus ipsum dolore non esse delectus quibusdam voluptatum error expedita aut ipsam nisi ea, asperiores consequatur quae. Et ullam perferendis tempora ab voluptatibus illum deserunt ipsam, cupiditate dolorem dignissimos saepe blanditiis repellat architecto maxime minus accusamus commodi consequatur minima illo delectus neque aperiam ipsum? Dignissimos vero, minus quos officiis ipsam delectus ullam placeat maiores nemo consequuntur exercitationem iure nam ipsum illum enim asperiores eius? Sequi unde harum reiciendis accusantium explicabo accusamus enim ex ea dicta eligendi adipisci ipsa reprehenderit, sit, aliquam amet! Repudiandae ipsam eos, maiores eum doloribus debitis tempora doloremque minus dolore numquam placeat molestias, laboriosam rerum officia vel praesentium quos laudantium quas blanditiis nemo laborum? At distinctio expedita eveniet neque delectus quis officia consectetur? Aspernatur error quidem, minus omnis minima modi eaque totam debitis, optio, laudantium nemo doloribus? Accusantium corrupti, distinctio perferendis tempore nostrum corporis aliquid adipisci, maiores veniam necessitatibus illum sequi eos ullam autem ipsam explicabo laborum. Blanditiis saepe, molestias facere obcaecati quibusdam sit quam consectetur quos cum, suscipit laudantium id ratione at, quisquam doloremque quia nulla. Quae eos facere facilis suscipit rerum. Quidem deserunt perferendis ullam facere repellendus iste dolores ut? Quo sint accusantium beatae fuga maiores dignissimos consequatur expedita quod excepturi nobis? Delectus, quidem similique reiciendis distinctio illo quod corporis soluta, iusto consequatur repellendus ut hic obcaecati facilis dolorem dolorum tempore voluptate tempora consectetur dolor consequuntur at? Fugit minima tempora quis laboriosam ea eligendi perferendis deserunt possimus? At natus sequi praesentium ad ducimus dicta, itaque commodi voluptates aspernatur repudiandae deserunt sint ab quas cumque sapiente voluptatibus. Consectetur quaerat iure cumque architecto quae adipisci quis nisi, voluptatem sapiente eligendi beatae mollitia. Sunt cupiditate voluptate magnam id iure? Blanditiis accusamus ipsa ad. Eligendi sequi, cupiditate exercitationem at sint quod explicabo. Nam eligendi mollitia totam ut natus commodi magnam impedit officiis doloremque facere dolorum, quos, vitae quisquam, harum sapiente dignissimos quia deleniti. Ut, amet? Dolorem, ad! Accusantium eos deleniti nesciunt explicabo incidunt beatae eveniet nulla repellendus dolor praesentium! Eaque modi cupiditate impedit ab consectetur, in nihil possimus illum labore nam repudiandae. Fugiat sequi earum fuga repudiandae. Optio ducimus beatae soluta iusto perspiciatis ipsa consequatur quam? Quas ex at labore et eum tempora dicta obcaecati consectetur voluptatem expedita, consequatur excepturi praesentium explicabo voluptates. Deleniti quasi, laborum consequuntur animi neque non numquam. Similique accusamus asperiores quidem architecto in. Eveniet provident, velit voluptatum sapiente ratione officia est porro molestias ipsum officiis deserunt voluptas ut. Error repellat quasi dolorum et odit, totam porro dolore, ratione, sapiente quaerat perferendis quae esse architecto quam ex. Porro omnis iste voluptate quia alias expedita aliquam quam sequi ad temporibus voluptas et consequatur, explicabo repellat, quas cum quis vel distinctio perspiciatis? Similique, voluptates temporibus aliquid unde molestias saepe! Minima inventore quae voluptas, eos illo nulla error.
            </p>
        </>
    )
} export default App