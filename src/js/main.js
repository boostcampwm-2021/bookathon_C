import '../css/main.scss'
import '../js/kakao.min'

const shareOpenBtn = document.querySelector('.share-btn')
const shareBtnList = document.querySelector('.share-btn-list')
const volumeRangeBar = document.querySelector('.volume-controller > input[type=range]')
const volumeBtn = document.querySelector('.volumn-btn')
const writePopup = document.querySelector('.popup')
const writeBtn = document.querySelector('.write-btn')
const fileUploadBtn = document.querySelector('.file-upload-btn')
const uploadFile = document.querySelector('#video')
const leftMove = document.querySelector('#left_move')
const rightMove = document.querySelector('#right_move')
const locationName = document.querySelector('#address_text')
const videoIframe = document.querySelector('#main_video > video')

const href = location.href
const backend = `http://101.101.217.153:8000`

const copyHandler = () => {
    let url = ''
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = href
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('URL이 복사되었습니다.')
}

const getRandomVideo = () => {
    fetch(`${backend}/api/video/random`).then(res => res.json())
    .then(res => {
        locationName.textContent = res.video.location
        videoIframe.src = res.video.videoURL.replace('localhost', '101.101.217.153') + '?autoplay=1&mute=1'
    })
}

leftMove.addEventListener('click', getRandomVideo)
rightMove.addEventListener('click', getRandomVideo)

const naverShareHandler = () => {
    window.open(`https://share.naver.com/web/shareView.nhn?url=${location.href}&title=i'am everywhere`,'_blank');
}

const kakaoShareHandler = () => {
    Kakao.init('d3fd7feec833bfcac050d9c364bcb690')      // 사용할 앱의 JavaScript 키를 설정
    Kakao.Link.sendDefault({
          objectType:'feed'
        , content : {
            title: `I'm Everywhere`
            , imageUrl: href + '/image/favicon.png'
            , link : {
                  mobileWebUrl:href   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                , webUrl:href // PC버전 카카오톡에서 사용하는 웹 링크 URL
            }
        }
        , buttons : [
            {
                  title : 'Go!'    // 버튼 제목
                , link : {
                    mobileWebUrl:href   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                  , webUrl:href // PC버전 카카오톡에서 사용하는 웹 링크 URL
                }
            }
        ]
    })
}

const showPopup = () => writePopup.classList.add('on')
const hidePopup = () => writePopup.classList.remove('on')
const uploadVideo = () => document.all.video.click()

uploadFile.addEventListener('input', () => {
    const formData = new FormData()
    const locationInput = document.querySelector('#location_input')
    formData.append('video', document.querySelector('#video').files[0])
    formData.append('location', locationInput.value)
    fetch(`${backend}/api/video`, {
        method: "POST",
        headers: {  },
        body: formData
    }).then((res) => {
        if(res.status==201){
            alert('Upload Complete!');
	    locationInput.value = ''
        }
        else{
            alert('Upload Failed...');
        }
        
    })
    hidePopup();
})

shareOpenBtn.addEventListener('click', () => shareOpenBtn.classList.toggle('on'))
shareBtnList.addEventListener('click', () => shareOpenBtn.classList.remove('on'))
shareBtnList.querySelector('.copy-btn').addEventListener('click', copyHandler)
shareBtnList.querySelector('.naver-btn').addEventListener('click', naverShareHandler)
shareBtnList.querySelector('.kakao-btn').addEventListener('click', kakaoShareHandler)
volumeRangeBar.addEventListener('input', () => {
    const volume = Number(volumeRangeBar.value)/100
    volume === 0 ? volumeBtn.classList.add('off') : volumeBtn.classList.remove('off')
    videoIframe.volume = volume
})
volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('off')
    volumeRangeBar.value = volumeBtn.classList.contains('off') ? 0 : 100
})
writeBtn.addEventListener('click', showPopup)
writePopup.querySelector('.close-btn').addEventListener('click', hidePopup)
fileUploadBtn.addEventListener('click', uploadVideo)

getRandomVideo()
