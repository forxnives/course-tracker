import React, {useState} from 'react'
import {fetchPost} from '../utils/fetchUtils'


function AddComment({user, courseId, setForceUpdate, forceUpdate}) {



    const [commentText, setCommentText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()


        fetchPost('courses/comment', {
            userId: user.id,

            courseId: courseId,
        
            comment: {
                text: commentText,
                timeStamp: new Date(),
            }

            
        }).then(data => {




            // alert('Successfully Submitted')
            setCommentText('')
            setForceUpdate(!forceUpdate)
            // window.location.reload()



        }).catch(err => alert(err))






    }


    return (
        <div className="add-review">
        <h5>Leave a Review</h5>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className="row">
                {/* <div className="form-group col-md-6">
                    <label>Name and Lastname *</label>
                    <input type="text" name="name_review" id="name_review" placeholder="" className="form-control"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Email *</label>
                    <input type="email" name="email_review" id="email_review" className="form-control"/>
                </div> */}
                {/* <div className="form-group col-md-6">
                    <label>Rating </label>
                    <div className="custom-select-form">
                    <select name="rating_review" id="rating_review" className="wide">
                        <option value="1">1 (lowest)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 (medium)</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10 (highest)</option>
                    </select>
                    </div>
                </div> */}
                <div className="form-group col-md-12">
                    <label>Your Review</label>
                    <textarea onChange={(e) => setCommentText(e.target.value)} name="review_text" id="review_text" value={commentText} className="form-control" style={{height:'130px'}}></textarea>
                </div>
                <div className="form-group col-md-12 add_top_20 add_bottom_30">
                    <input type="submit" value="Submit" className="btn_1" id="submit-comment"/>
                </div>
            </div>
        </form>
    </div>
    )
}

export default AddComment
