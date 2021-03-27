import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import image from 'src/images/a84a73d1-56c0-4214-8252-344691835400.jpg';
import '../assets/css/plan.css'
const Plan = () => {
    return (
        <div className="container ">
            <div class=" px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h5 class="display-4">Choose your Plan</h5>
            </div>

            <div class="container">
                <div class="card-deck card mb-3 box-shadow text-center shadow-lg">
                    <div class="card mt-5">
                        <div class="card-header">
                            <h4 class="my-0  py-2 plan-title font-weight-normal">Silver</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn plan-button btn-lg btn-block ">Apply</button>
                        </div>
                    </div>
                    <div class="card mt-5 box-shadow">
                        <div class="card-header">
                            <h4 class="my-0 py-2 plan-title  font-weight-normal">Gold</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>20 users included</li>
                                <li>10 GB of storage</li>
                                <li>Priority email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn plan-button btn-lg btn-block ">Apply</button>
                        </div>
                    </div>
                    <div class="card mt-5 box-shadow">
                        <div class="card-header">
                            <h4 class="my-0 py-2 plan-title font-weight-normal">Platinam</h4>
                            
                        </div>
                       
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>30 users included</li>
                                <li>15 GB of storage</li>
                                <li>Phone and email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="btn plan-button btn-lg btn-block ">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Plan;
