var num = 1; //이미지 번호
        
        
        //ad_banner(방향값 0, 1)
        function ad_banner(direct){
            
            //방향값 판단하여 이전 또는 다음 이미지로 
            if(direct){
                if(num == 3) return;
                num++; //이미지 번호 증가
            } else{
                //이전 이미지
                if(num == 1)return;
                num--;
            }
             //이미지 출력
            var imgTag = document.getElementById('photo2');
            
            //이미지 태그의 파일명 변경(src속성)
            //setAttribute('속성명', '변경내용')
            imgTag.setAttribute('src', 'images/image' + num + '.jpg');
        }

