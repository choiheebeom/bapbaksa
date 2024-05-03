import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import {getSignupAction} from '../../redux/actions/user';



const SignUp = () => {

    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uCheckPw, setUCheckPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');
    const [uProfile, setUProfile] = useState('');
    const [uZipcode, setUZipCode] = useState('');
    const [uFirstAddr, setUFirstAddr] = useState('');
    const [uSecondAddr, setUSeconAddr] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //  // 회원가입, 정보수정
    //  function memberFormCheck(type) {
    //     if (type == "create") {
    //         // 아이디 검증: 영어 소문자와 숫자로만 구성되어야 함
    //         switch (idCheck()) {
    //             case 1:
    //                 break;
    //             case 2:
    //             case 4:
    //                 alert("아이디는 최소 5자 이상이어야 합니다.");
    //                 document.getElementsByName("u_id")[0].focus();
    //                 return false;
    //                 break;
    //             case 3:
    //                 alert("아이디는 영어 소문자와 숫자로만 구성되어야 합니다.");
    //                 document.getElementsByName("u_id")[0].focus();
    //                 return false;
    //                 break;
    //             case 5:
    //                 alert("중복된 아이디입니다.");
    //                 document.getElementsByName("u_id")[0].focus();
    //                 return false;
    //         }

    //         // 비밀번호 검증: 최소 8자 이상 및 특수문자 1개 이상 포함
    //         switch (pwCheck()) {
    //             case 1:
    //                 break;
    //             case 2:
    //                 alert("비밀번호를 입력해 주세요.");
    //                 document.getElementsByName("m_pw")[0].focus();
    //                 return false;
    //                 break;
    //             case 3:
    //                 alert(
    //                     "비밀번호는 최소 8자 이상이어야 하며, 특수문자를 최소 1개 이상 포함해야 합니다."
    //                 );
    //                 document.getElementsByName("m_pw")[0].focus();
    //                 return false;
    //                 break;
    //         }

    //         // 비밀번호 재확인
    //         switch (pwCompareCheck()) {
    //             case 1:
    //                 break;
    //             case 2:
    //                 alert("비밀번호가 일치하지 않습니다.");
    //                 document.getElementsByName("m_pw_again")[0].focus();
    //                 return false;
    //                 break;
    //         }
    //     }
      

    //     // 이메일 주소 검증: 정규식 사용
    //     switch (mailCheck()) {
    //         case 1:
    //             break;
    //         case 2:
    //         case 3:
    //             alert("유효한 이메일 주소를 입력해 주세요.");
    //             document.getElementsByName("u_mail")[0].focus();
    //             return false;
    //             break;
    //     }

    //     // 핸드폰 검증 : 정규식 사용
    //     switch (phoneCheck()) {
    //         case 1:
    //             break;
    //         case 2:
    //         case 3:
    //             alert("유효한 전화번호를 입력해 주세요.");
    //             document.getElementsByName("u_phone")[0].focus();
    //             return false;
    //             break;
    //     }

    //     // 주소 검증 : 정규식 사용
    //     switch (addrCheck()) {
    //         case 1:
    //             break;
    //         case 2:
    //             alert("유효한 우편번호를 입력해 주세요.");
    //             document.getElementById("search_address_btn").focus();
    //             return false;
    //         case 3:
    //             alert("주소를 입력해 주세요.");
    //             document.getElementById("search_address_btn").focus();
    //             return false;
    //         case 4:
    //             alert("상세주소를 입력해 주세요.");
    //             document.getElementsByName("u_detail_addr")[0].focus();
    //             return false;
    //     }

    //     // 유효한 경우 폼 제출
    //     if (type == "modify") {
    //         modifyConfirm();
    //     } else if (type == "create") {
    //         document.signup_form.submit();
    //     }
    // }

    // /* 전화번호에 숫자만 들어올 수 있게 */
    // function extractNumbers(input) {
    //     // 입력된 값에서 숫자만 추출하여 새로운 값으로 설정
    //     let cleanedValue = input.value.replace(/\D/g, "");

    //     // 추출된 숫자를 입력 필드의 값으로 설정
    //     input.value = cleanedValue;
    // }

    // function inputTextCheck(e) {
    //     let inputEl = e.target;
    //     let inputName = inputEl.name;

    //     let result = 0;

    //     switch (inputName) {
    //         case "m_id":
    //             result = idCheck();
    //             break;

    //         case "m_pw":
    //             result = pwCheck();
    //             break;

    //         case "m_pw_again":
    //             result = pwCompareCheck();
    //             break;

    //         case "m_mail":
    //             result = mailCheck();
    //             break;

    //         case "m_name":
    //             result = nameCheck();
    //             break;

    //         case "m_phone":
    //             result = phoneCheck();
    //             break;

    //         case "m_addr_code":
    //         case "m_addr":
    //         case "m_detail_addr":
    //             result = addrCheck();
    //             break;
    //     }

    //     if (inputName == "m_id") {
    //         idMessage(result);
    //     } else {
    //         if (result == 1) {
    //             hideMessage(inputEl);
    //         } else {
    //             showMessage(inputEl);
    //         }
    //     }
    // }

    // function showMessage(input) {
    //     let messageEl = document.getElementById("message_" + input.name);
    //     let iconEl = document.getElementById("icon_" + input.name);

    //     if (messageEl && iconEl) {
    //         messageEl.style.color = "#ff0000";
    //         iconEl.style.color = "#ff0000";

    //         iconEl.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    //         messageEl.style.display = "block";
    //     }
    // }

    // function hideMessage(input) {
    //     let messageEl = document.getElementById("message_" + input.name);
    //     let iconEl = document.getElementById("icon_" + input.name);

    //     if (messageEl && iconEl) {
    //         messageEl.style.color = "var(--main-light-color)";
    //         iconEl.style.color = "var(--main-light-color)";

    //         iconEl.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    //         messageEl.style.display = "none";
    //     }
    // }

    // function idMessage(result) {
    //     let messageEl = document.getElementById("message_m_id");
    //     let messageSameEl = document.getElementById("message_same_m_id");
    //     let iconEl = document.getElementById("icon_m_id");


    //     if (messageEl && messageSameEl && iconEl) {
    //         if (result == 1) {
    //             messageEl.style.color = "var(--main-light-color)";
    //             messageSameEl.style.color = "var(--main-light-color)";
    //             iconEl.style.color = "var(--main-light-color)";

    //             iconEl.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    //             messageEl.style.display = "none";
    //             messageSameEl.style.display = "none";
    //         } else if (result != 5) {
    //             messageEl.style.color = "#ff0000";
    //             iconEl.style.color = "#ff0000";

    //             iconEl.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    //             messageSameEl.style.display = "none";
    //             messageEl.style.display = "block";
    //         } else {
    //             messageSameEl.style.color = "#ff0000";
    //             iconEl.style.color = "#ff0000";

    //             iconEl.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    //             messageEl.style.display = "none";
    //             messageSameEl.style.display = "block";
    //         }
    //     }
    // }



    const userInfoChangeHandler = (e) => {
        console.log('userInfoChangeHandler()');

        let input_name = e.target.name;
        let input_value = e.target.value;

        if (input_name === "u_id") {
            setUId(input_value);

        } else if (input_name === "u_pw") {
            setUPw(input_value);

        } else if (input_name === "u_check_pw") {
            setUCheckPw(input_value);

        } else if (input_name === "u_mail") {
            setUMail(input_value);

        } else if (input_name === "u_phone") {
            setUPhone(input_value);

        } else if (input_name === "u_profile") {
            setUProfile(input_value);

        } else if (input_name === "u_zip_code") {
            setUZipCode(input_value);

        } else if (input_name === "u_first_address") {
            setUFirstAddr(input_value);

        } else if (input_name === "u_second_address") {
            setUSeconAddr(input_value);
        }
    }

     
    const signupBtnClickHandler =() => {
        console.log('signupBtnClickHandler()');

        let form = document.signup_form;

        if (uId === '') {
            alert('아이디를 입력해 주세요');
            form.u_id.focus();

        } else if (uPw === '') {
            alert('비밀번호를 입력해 주세요');
            form.u_pw.focus();

        } else if (uCheckPw === '') {
            alert('비밀번호를 한번 더 입력해 주세요');
            form.u_check_pw.focus();

        } else if (uMail === '') {
            alert('이메일을 입력해 주세요');
            form.u_mail.focus();

        } else if (uPhone === '') {
            alert('휴대폰 번호를 입력해 주세요');
            form.u_phone.focus();

        } else {            

            let u_profiles = $('input[name="u_profile"]');
            console.log('u_profiles: ', u_profiles);
            let files = u_profiles[0].files;   
            console.log('files: ', files);

            let formData = new FormData();
            formData.append("u_id", uId);
            formData.append("u_pw", uPw);            
            formData.append("u_mail", uMail);
            formData.append("u_phone", uPhone);
            formData.append("u_zip_code", uZipcode);
            formData.append("u_first_address", uFirstAddr);
            formData.append("u_second_address", uSecondAddr);
            formData.append("u_profile_img", files[0]);
        
            dispatch(getSignupAction(formData));
        
            setUId(''); setUPw(''); setUCheckPw(''); setUMail(''); setUPhone('');
            setUZipCode(''); setUFirstAddr(''); setUSeconAddr(''); setUProfile('');                    
                    
        }
    }

    

    return (
        <div className='content-wrap'>

            <h2 className='title'>회원가입</h2>

            <div className='content'>

                <div className='signup-wrap'>            
                    <form name="signup_form" className='form'>
                        <div className='input-wrap'>                    
                            <input type="text" name="u_id" value={uId} onChange={(e) => userInfoChangeHandler(e)} placeholder="아이디를 입력해 주세요"/>    
                            {/* <button type="button" class="btn sub" onClick="isMember();">중복체크</button> */}

                            <span id="icon_m_id" class="input-icon"></span>
                            <span id="message_m_id" class="input-message">아이디는 5글자 이상이며, 영문 소문자와 숫자만 입력 가능합니다.</span>
                            <span id="message_same_m_id" class="input-message">중복된 아이디입니다.</span>
                        </div>

                        <div className='input-wrap'>
                            <input type="password" name="u_pw" value={uPw} onChange={(e) => userInfoChangeHandler(e)} placeholder="비밀번호를 입력해 주세요"/>    
                            <span id="icon_m_pw" class="input-icon"></span>
                            <span id="message_m_pw" class="input-message">비밀번호는 최소 8자 이상이어야 하며, 특수문자를 최소 1개 이상 포함해야 합니다.</span>
                        </div>

                        <div className='input-wrap'>
                            <input type="password" name="u_check_pw" value={uCheckPw} onChange={(e) => userInfoChangeHandler(e)} placeholder="비밀번호를 한번 더 입력해 주세요"/>
                            <span id="icon_u_check_pw" class="input-icon"></span>
                            <span id="message_u_check_pw" class="input-message">비밀번호가 일치하지 않습니다.</span>
                        </div>

                        <div className='input-wrap'>
                            <input type="text" name="u_mail" value={uMail} onChange={(e) => userInfoChangeHandler(e)} placeholder="이메일 주소를 입력해 주세요"/>
                            <span id="icon_u_mail" class="input-icon"></span>
                            <span id="message_u_mail" class="input-message">유효한 이메일 주소를 입력해 주세요.</span>
                        </div>

                        <div className='input-wrap'>
                            <input type="text" name="u_phone" value={uPhone} onChange={(e) => userInfoChangeHandler(e)} placeholder="휴대폰 번호를 입력해 주세요"/>
                            {/* <input type="text" name="m_phone" placeholder="전화번호를 입력해 주세요." oninput="extractNumbers(this)"/> */}
                            <span id="icon_u_phone" class="input-icon"></span>
                            <span id="message_u_phone" class="input-message">전화번호는 숫자 9~12자까지 입력 가능합니다.</span>
                        </div>

                        <div className='input-wrap'>
                            <div>
                                <input type="text" id="postcode" name="u_zip_code" value={uZipcode} onChange={(e) => userInfoChangeHandler(e)} placeholder="우편번호" readOnly/>
                                <button type="button" id="search_address_btn" onclick="searchAddress()" class="btn sub">
                                    <i class="fa-solid fa-location-crosshairs"></i>
                                </button>
                            </div>

                            <div className='col'>
                                <input type="text" id="address" name="u_first_address" value={uFirstAddr} onChange={(e) => userInfoChangeHandler(e)} placeholder="주소" readOnly/>
                                <input type="text" id="detailAddress" name="u_second_address" value={uSecondAddr} onChange={(e) => userInfoChangeHandler(e)} placeholder="상세주소"/>

                                <span id="icon_u_detail_addr" class="input-icon"></span>
                                <span id="message_u_detail_addr" class="input-message">주소를 입력해 주세요.</span>
                            </div>
                        </div>
                        
                        <div class='input-wrap'>
                            <div>
                                <span id="icon_u_profile" class="input-icon"></span>
                                <span id="message_u_profile" class="input-message">프로필 사진을 선택해 주세요.</span>
                                <input type="file" name="u_profile" value={uProfile} onChange={(e) => userInfoChangeHandler(e)}/>                
                            </div>
                        </div>
                    
                        <div class='btn-wrap'>
                            <button type="button" onClick={signupBtnClickHandler} className="btn main full">회원가입</button>
                        </div>
                        

                        {/* <div class="btn-wrap">
                            <button type="button" onclick="memberFormCheck('create');" class="btn main full">회원가입</button>
                        </div> */}

                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;