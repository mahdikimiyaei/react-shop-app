import Form from 'react-bootstrap/Form';
import { useOrders } from '../hooks/useOrders';
import { Button } from '@mui/material';

export default function FormOrders({handleAddOrder}: {handleAddOrder: () => void}) {
    const { setFormOrder, formOrder } = useOrders();

    return (
        <Form onSubmit={(e) => {
            handleAddOrder();
            e.preventDefault()
        }} className="bg-white rounded-3xl mt-10 shadow-xl border border-blue-100 p-8 transition-all duration-300 hover:shadow-blue-200">

            <h2 className="text-2xl font-bold text-blue-700 text-center mb-8">
                اطلاعات گیرنده
            </h2>

            <Form.Group
                className="mb-5 transition-all duration-300"
                controlId="exampleForm.ControlInput1"
            >
                <Form.Label className="text-gray-700 font-semibold mb-2">
                    آدرس منزل
                </Form.Label>

                <Form.Control
                    className="rounded-xl border-2 border-blue-100 py-3 px-4 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:shadow-lg"
                    type="text"
                    value={formOrder.address}
                    onChange={(e) =>
                        setFormOrder({
                            ...formOrder,
                            address: e.target.value,
                        })
                    }
                />
                <Button onClick={() => setFormOrder({ ...formOrder, address: "" })} variant='contained' sx={{ marginTop: "10px" }}>ویرایش آدرس</Button>
            </Form.Group>

            <Form.Group
                className="mb-5 transition-all duration-300"
                controlId="exampleForm.ControlInput3"
            >
                <Form.Label className="text-gray-700 font-semibold mb-2">
                    ایمیل
                </Form.Label>

                <Form.Control
                    className="rounded-xl border-2 border-blue-100 py-3 px-4 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:shadow-lg"
                    type="email"
                    value={formOrder.email}
                    onChange={(e) =>
                        setFormOrder({
                            ...formOrder,
                            email: e.target.value,
                        })
                    }
                />
                <Button onClick={() => setFormOrder({ ...formOrder, email: "" })} variant='contained' sx={{ marginTop: "10px" }}>ویرایش ایمیل</Button>
            </Form.Group>

            <Form.Group
                className="transition-all duration-300"
                controlId="exampleForm.ControlInput2"
            >
                <Form.Label className="text-gray-700 font-semibold mb-2">
                    کد پستی
                </Form.Label>

                <Form.Control
                    className="rounded-xl border-2 border-blue-100 py-3 px-4 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 focus:shadow-lg"
                    type="text"
                    value={formOrder.postaCode}
                    onChange={(e) =>
                        setFormOrder({
                            ...formOrder,
                            postaCode: e.target.value,
                        })
                    }
                />
                <Button onClick={() => setFormOrder({ ...formOrder, postaCode: "" })} variant='contained' sx={{ marginTop: "10px" }}>ویرایش کد پستی</Button>
            </Form.Group>
            <div className="flex justify-center mt-6">
                        <button
                        type='submit'
                            className="
        relative overflow-hidden
        px-10 py-3
        rounded-2xl
        bg-linear-to-r from-blue-500 to-blue-600
        text-white font-bold text-lg
        shadow-lg shadow-blue-200
        transition-all duration-300 ease-in-out
        hover:from-blue-600 hover:to-blue-700
        hover:shadow-xl hover:shadow-blue-300
        hover:-translate-y-1
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
    "
                        >
                            ثبت سفارش
                        </button>
                    </div>
        </Form>
    );
}