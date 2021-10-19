const Form = ({submit}) => {
    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="row py-4 justify-content-center">
                    <div className="col-md-5">
                        <input name="city" className="form-control" type="text" placeholder="City Name" aria-label="Search" />
                    </div>
                    <div className="col-md-1 text-center pt-2 pt-md-0">
                        <button className="btn btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form