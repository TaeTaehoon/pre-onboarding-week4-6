## view 특징

### index.css
- UI 설정 시 편의를 위해 html 전체 font-size를 10px로 설정하여 해당 서비스에서의 rem property의 기준값을 10px로 변경 ( 원래 1rem = 16px) [index.css]

### App.tsx
- App 전체 container의 max-width를 1280px로 설정.

### Form.tsx
- comment add part에서 createdAt input은 자동으로 Date.now()에 기반하여 현재 날짜가 입력되도록 설정, Date format의 경우 Intl-'ko-KR'로 설정함. 추가적으로 Intl-'ko-KR'의 경우 기본적으로 ' . '으로 date를 구분하지만 map함수를 이용하여 구분자를 ' - ' 로 변경함.
- 기본 form에서 의미없이 위아래로만 정렬되어있는 부분을 flex-box property를 이용하여 임의로 정렬

### CommentList.tsx
- 기존 hr tag를 이용해서 구현되어 있던 구분선 삭제, 후에 border를 이용하여 첫 comment에만 border-top 적용, 그외에는 border-bottom을 이용해서 구분선 구현
