import { locales as AdminJSLocales } from "adminjs";

const localeVi = {
    language: "vi",
    availableLanguages: Object.keys(AdminJSLocales),
    translations: {
        vi: {
            labels: {
                // labels cho resource
                User: "Người dùng",
                Dashboard: "Bảng điều khiển",
                Navigation: "Điều hướng",
            },
            buttons: {
                save: "Lưu",
                addNewItem: "Thêm mới",
                filter: "Lọc",
                applyChanges: "Áp dụng thay đổi",
                resetFilter: "Đặt lại lọc",
                confirmRemovalMany: "Xác nhận xoá nhiều mục",
                confirmRemovalMany_plural: "Xác nhận xoá {{count}} mục",
                logout: "Đăng xuất",
                login: "Đăng nhập",
                createFirstRecord: "Tạo bản ghi đầu tiên",
            },
            messages: {
                successfullyBulkDeleted: "Đã xoá thành công nhiều bản ghi",
                successfullyDeleted: "Đã xoá thành công",
                successfullyUpdated: "Cập nhật thành công",
                thereWereValidationErrors: "Có lỗi khi xác thực",
                forbiddenError: "Bạn không có quyền truy cập",
                anyForbiddenError: "Không thể tải tài nguyên",
                successfullyCreated: "Tạo mới thành công",
                bulkDeleteError: "Có lỗi khi xoá hàng loạt",
                errorFetchingRecords: "Có lỗi khi lấy dữ liệu",
                errorFetchingRecord: "Có lỗi khi lấy dữ liệu",
                noRecordsSelected: "Chưa chọn bản ghi",
                theseRecordsWillBeRemoved: "Những bản ghi sau sẽ bị xoá:",
                theseRecordsWillBeRemoved_plural: "Những bản ghi sau sẽ bị xoá:",
                pickSomeFirstToRemove: "Chọn ít nhất 1 bản ghi để xoá",
            },
            properties: {
                // field name override nếu cần
                createdAt: "Ngày tạo",
                updatedAt: "Ngày cập nhật",
            },
            resources: {
                User: {
                    properties: {
                        name: "Tên",
                        email: "Email",
                        password: "Mật khẩu",
                        role: "Vai trò",
                        lastLogin: "Lần đăng nhập cuối",
                        isVerified: "Đã xác thực",
                    },
                },
            },
        },
    },
};

export default localeVi;
