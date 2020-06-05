function checkWriteForm(){ 
	if(document.guestbookWriteForm.subject.value == "") {
        alert("제목을 입력하세요.");
        document.guestbookWriteForm.subject.focus();
    } else if(document.guestbookWriteForm.content.value == ""){ // id속성
        alert("내용을 입력하세요.");
        document.guestbookWriteForm.content.focus();
    } else  {
    	document.guestbookWriteForm.submit();
    } 
 }


