

import AdminDashboardLayout from "@/components/pages/admin/AdminDashboardLayout"
import AuthorizationWrapper from "@/utils/authorization"
const Layout = ({ children }) => {


    return (<>
        <AuthorizationWrapper allowedRoles={['admin']}>

            <AdminDashboardLayout>

              <div className="h-full overflow-auto">
              {children}
              </div>
            </AdminDashboardLayout>
        </AuthorizationWrapper>


    </>)
}

export default Layout