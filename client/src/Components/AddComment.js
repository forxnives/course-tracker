import React from 'react'

function AddComment() {
    return (
        <div class="add-review">
        <h5>Leave a Review</h5>
        <form>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Name and Lastname *</label>
                    <input type="text" name="name_review" id="name_review" placeholder="" class="form-control"/>
                </div>
                <div class="form-group col-md-6">
                    <label>Email *</label>
                    <input type="email" name="email_review" id="email_review" class="form-control"/>
                </div>
                <div class="form-group col-md-6">
                    <label>Rating </label>
                    <div class="custom-select-form">
                    <select name="rating_review" id="rating_review" class="wide">
                        <option value="1">1 (lowest)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected>5 (medium)</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10 (highest)</option>
                    </select>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label>Your Review</label>
                    <textarea name="review_text" id="review_text" class="form-control" style={{height:'130px;'}}></textarea>
                </div>
                <div class="form-group col-md-12 add_top_20 add_bottom_30">
                    <input type="submit" value="Submit" class="btn_1" id="submit-review"/>
                </div>
            </div>
        </form>
    </div>
    )
}

export default AddComment
