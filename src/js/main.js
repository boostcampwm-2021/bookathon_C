import '../css/main.scss'

const shareOpenBtn = document.querySelector('.share-btn')
const shareBtnList = document.querySelector('.share-btn-list')
const volumeRangeBar = document.querySelector('.volume-controller > input[type=range]')
const volumeBtn = document.querySelector('.volumn-btn')
const writePopup = document.querySelector('.popup')
const writeBtn = document.querySelector('.write-btn')
const fileUploadBtn = document.querySelector('.file-upload-btn')

const copyHandler = () => {
    let url = ''
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    url = window.document.location.href
    textarea.value = url
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('URL이 복사되었습니다.')
}

const kakaoShareHandler = () => {
    /*
    Kakao.init('31c50ca8bd99011697fd15fc5b1b52b7')      // 사용할 앱의 JavaScript 키를 설정
    Kakao.Link.sendDefault({
          objectType:'feed'
        , content : {
            title
            , description:desc   // 콘텐츠 상세설명
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
    */
}

const showPopup = () => writePopup.classList.add('on')
const hidePopup = () => writePopup.classList.remove('on')
const uploadVideo = () => {
    document.all.video.click()
}

shareOpenBtn.addEventListener('click', () => shareOpenBtn.classList.toggle('on'))
shareBtnList.addEventListener('click', () => shareOpenBtn.classList.remove('on'))
shareBtnList.querySelector('.copy-btn').addEventListener('click', copyHandler)
shareBtnList.querySelector('.kakao-btn').addEventListener('click', kakaoShareHandler)
volumeRangeBar.addEventListener('input', () => {
    const volume = Number(volumeRangeBar.value)
    volume === 0 ? volumeBtn.classList.add('off') : volumeBtn.classList.remove('off')
})
volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('off')
    volumeRangeBar.value = volumeBtn.classList.contains('off') ? 0 : 100
})
writeBtn.addEventListener('click', showPopup)
writePopup.querySelector('.close-btn').addEventListener('click', hidePopup)
fileUploadBtn.addEventListener('click', uploadVideo)